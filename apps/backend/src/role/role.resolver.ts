import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { Selections } from '@jenyus-org/nestjs-graphql-utils';
import { RolePaginationType } from './types/RolePaginationType';
import {
  FindManyRoleArgs, Permission, Role, User,
} from '../gql';
import { CrudService } from '../crud/crud.service';
import { RoleService } from './role.service';
import { RoleUpdateDto } from './dto/role.update.dto';
import { PermissionService } from './permission.service';
import { AccessTokenGuard } from '../auth/guard/access-token.guard';
import { RoleCreateDto } from './dto/role.create.dto';
import { UsePermissionGuard } from '../auth/guard/permission.guard';
import { rolesAdminPermission } from './permissions';
import { UserFromRequest } from '../auth/decorators/user-from-request';

@UsePermissionGuard(rolesAdminPermission)
@UseGuards(AccessTokenGuard)
@Resolver()
export class RoleResolver {
  @Inject()
  private crud: CrudService;

  @Inject()
  private roleService: RoleService;

  @Inject()
  private permissionService: PermissionService;

  @Query(() => RolePaginationType)
  async rolesList(
  @Args('query') query: FindManyRoleArgs,
    @Selections('rolesList', ['*.*'], false) fields: string[],
  ) {
    return this.crud.paginate('role', query, fields);
  }

  @Query(() => Role)
  async role(
  @Args('id') id: string,
  ) {
    return this.roleService.getBuilder().findFirstOrThrow({
      where: {
        id,
      },
      include: {
        permissionsOnRoles: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  @Mutation(() => Role)
  async updateRole(
  @Args('input') data: RoleUpdateDto,
  ) {
    await this.roleService.getBuilder().update({
      where: {
        id: data.id,
      },
      data: {
        slug: data.slug,
        permissionsOnRoles: data.permissions && {
          deleteMany: {
            roleId: data.id,
          },
          create: data.permissions.map((permissionId) => ({
            permissionId,
          })),
        },
      },
    });

    return this.role(data.id);
  }

  @Mutation(() => Role)
  async createRole(
  @Args('input') data: RoleCreateDto,
  ) {
    return this.roleService.getBuilder().create({
      data: {
        slug: data.slug,
        permissionsOnRoles: {
          create: data.permissions.map((permissionId) => ({
            permissionId,
          })),
        },
      },
    });
  }

  @Mutation(() => Boolean)
  async deleteRoles(
  @Args('ids', { type: () => [String] }) ids: string[],
    @UserFromRequest() user: User,
  ) {
    await this.roleService.getBuilder().deleteMany({
      where: {
        id: {
          in: ids,
        },
        users: {
          none: {
            id: user.id,
          },
        },
      },
    });

    return true;
  }

  @Query(() => [Permission])
  async permissions() {
    return this.permissionService.getBuilder().findMany();
  }
}
