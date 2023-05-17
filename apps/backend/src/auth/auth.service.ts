import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { addSeconds } from 'date-fns';
import { ConfigService } from '../config/config.service';
import { UserService } from '../user/user.service';
import { AuthDataType } from './types/auth-data.type';
import { EnvironmentVariables } from '../config/environment-variables';
import { AuthTokenType, AuthTokenTypeEnum } from './types/auth-token.type';
import { AuthSignInDto } from './dto/auth.sign-in.dto';
import { User } from '../gql';
import { AuthSignUpDto } from './dto/auth.sign-up.dto';
import { PermissionConfig } from '../role/permissions';

@Injectable()
export class AuthService {
  @Inject()
  private userService: UserService;

  @Inject()
  private jwtService: JwtService;

  @Inject()
  private configService: ConfigService<EnvironmentVariables>;

  async login(payload: AuthSignInDto): Promise<AuthDataType> {
    const user = await this.userService.getBuilder().findFirstOrThrow({
      where: {
        login: payload.login,
      },
      include: {
        role: {
          include: {
            permissionsOnRoles: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });

    return {
      accessToken: await this.generateToken(
        user,
        this.configService.get('JWT_ACCESS_SECRET')!,
        this.configService.get('JWT_ACCESS_TTL')!,
      ),
      refreshToken: await this.generateToken(
        user,
        this.configService.get('JWT_REFRESH_SECRET')!,
        this.configService.get('JWT_REFRESH_TTL')!,
      ),
      data: user,
    };
  }

  async register({ login, password }: AuthSignUpDto): Promise<AuthDataType> {
    const roleId = await this.configService.getField('initialRoleId');

    const user = await this.userService.create({
      login,
      password,
      roleId,
    });

    return this.login(user);
  }

  private async generateToken(
    user: Pick<User, 'id'>,
    secretKey: string,
    ttl: string,
  ): Promise<AuthTokenType> {
    const expiresIn = parseInt(ttl, 10);

    return {
      token: this.jwtService.sign({
        sub: user.id,
      }, {
        secret: secretKey,
        expiresIn,
      }),
      type: AuthTokenTypeEnum.bearer,
      expiresAt: addSeconds(new Date(), expiresIn),
    };
  }

  hasPermission(user: User, ...permissions: Array<PermissionConfig>) {
    return permissions.every(
      ({ namespace, slug }) => user.role?.permissionsOnRoles?.some(
        (p) => p.permission?.slug === slug && p.permission?.namespace === namespace,
      ),
    );
  }
}
