import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '../../config/config.service';
import { EnvironmentVariables } from '../../config/environment-variables';
import { AuthPayloadType } from '../types/auth-payload.type';
import { UserService } from '../../user/user.service';
import { User } from '../../gql';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  @Inject()
  private userService: UserService;

  constructor(
    private readonly configService: ConfigService<EnvironmentVariables>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req) => {
          const header = req.header('refresh-token');
          if (!header) {
            return null;
          }
          const [type, token] = header.split(' ');

          if (type.toLowerCase() === 'bearer') {
            return token;
          }
          return null;
        },
      ]),
      secretOrKey: configService.get('JWT_REFRESH_SECRET'),
      passReqToCallback: true,
      ignoreExpiration: false,
    });
  }

  async validate(payload: AuthPayloadType): Promise<User> {
    return this.userService.findByIdWithRoles(payload.sub);
  }
}
