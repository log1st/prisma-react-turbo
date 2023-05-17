import {
  Inject, Injectable,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { User } from '../gql';
import { PermissionConfig } from '../role/permissions';
import { AuthService } from './auth.service';

@Injectable()
export class AuthDataUser {
  @Inject()
    authService: AuthService;

  @Inject(REQUEST)
  private context: {
    user: User
  };

  get user(): User {
    return this.context.user;
  }

  checkPermission(
    ...permissions: Array<PermissionConfig>
  ) {
    return this.authService.hasPermission(this.user, ...permissions);
  }
}
