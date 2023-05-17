import {
  applyDecorators,
  CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable, SetMetadata, UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { PermissionConfig } from '../../role/permissions';

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject()
  private service: AuthService;

  @Inject()
  private reflector: Reflector;

  canActivate(context: ExecutionContext) {
    const permissions = (
      this.reflector.get<Array<PermissionConfig>>('permissions', context.getHandler())
        || this.reflector.get<Array<PermissionConfig>>('permissions', context.getClass())
    );

    const can = this.service.hasPermission(
      GqlExecutionContext.create(context).getContext().req.user,
      ...permissions || [],
    );
    if (!can || !permissions?.length) {
      throw new ForbiddenException('forbidden');
    }
    return true;
  }
}

export const UsePermissionGuard = (
  ...permissions: Array<PermissionConfig>
) => applyDecorators(
  SetMetadata('permissions', permissions),
  UseGuards(PermissionGuard),
);
