import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '../../config/config.service';
import { EnvironmentVariables } from '../../config/environment-variables';
import { AuthPayloadType } from '../types/auth-payload.type';
import { UserService } from '../../user/user.service';
import { User } from '../../gql';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt',
) {
  @Inject()
  private userService: UserService;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_ACCESS_SECRET'),
      ignoreExpiration: false,
    });
  }

  async validate(payload: AuthPayloadType): Promise<User> {
    return this.userService.findByIdWithRoles(payload.sub);
  }
}
