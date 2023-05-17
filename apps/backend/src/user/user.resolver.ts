import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { BadRequestException, Inject, UseGuards } from '@nestjs/common';
import { Selections } from '@jenyus-org/nestjs-graphql-utils';
import { UsePermissionGuard } from '../auth/guard/permission.guard';
import { usersAdminPermission } from '../role/permissions';
import { AccessTokenGuard } from '../auth/guard/access-token.guard';
import { CrudService } from '../crud/crud.service';
import { UserService } from './user.service';
import { FindManyUserArgs, User } from '../gql';
import { UserPaginationType } from './types/UserPaginationType';
import { UserFromRequest } from '../auth/decorators/user-from-request';
import { UserUpdateDto } from './dto/user.update.dto';
import { UserCreateDto } from './dto/user.create.dto';

@UsePermissionGuard(usersAdminPermission)
@UseGuards(AccessTokenGuard)
@Resolver()
export class UserResolver {
  @Inject()
  private crud: CrudService;

  @Inject()
  private userService: UserService;

  @Query(() => UserPaginationType)
  async usersList(
  @Args('query') query: FindManyUserArgs,
    @Selections('usersList', ['*.*'], false) fields: string[],
  ) {
    return this.crud.paginate('user', query, fields);
  }

  @Query(() => User)
  async user(
  @Args('id') id: string,
  ) {
    return this.userService.getBuilder().findFirstOrThrow({
      where: {
        id,
      },
      include: {
        role: true,
      },
    });
  }

  @Mutation(() => User)
  async updateUser(
  @Args('input') { id, ...data }: UserUpdateDto,
  ) {
    await this.userService.getBuilder().update({
      where: {
        id,
      },
      data,
    });

    return this.user(id);
  }

  @Mutation(() => User)
  async createUser(
  @Args('input') data: UserCreateDto,
  ) {
    return this.userService.getBuilder().create({
      data,
    });
  }

  @Mutation(() => Boolean)
  async deleteUsers(
  @Args('ids', { type: () => [String] }) ids: string[],
    @UserFromRequest() user: User,
  ) {
    await this.userService.getBuilder().deleteMany({
      where: {
        id: {
          in: ids,
        },
        NOT: [{
          id: user.id,
        }],
      },
    });

    return true;
  }
}
