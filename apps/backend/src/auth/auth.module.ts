import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UserModule } from '../user/user.module';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { AuthUserRule } from './contstraints/auth-user.rule';
import { ValidationModule } from '../validation/validation.module';
import { PermissionGuard } from './guard/permission.guard';
import { AuthDataUser } from './auth-data.user';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    UserModule,
    JwtModule,
    ValidationModule,
    ConfigModule,
  ],
  providers: [
    AuthService,
    AuthResolver,
    AccessTokenStrategy,
    RefreshTokenStrategy,
    AuthUserRule,
    PermissionGuard,
    AuthDataUser,
  ],
  exports: [
    AuthService,
    PermissionGuard,
    AuthDataUser,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
