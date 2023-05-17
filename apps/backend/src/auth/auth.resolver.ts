import {
  Args, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { AuthDataType } from './types/auth-data.type';
import { AuthService } from './auth.service';
import { AuthSignInDto } from './dto/auth.sign-in.dto';
import { User } from '../gql';
import { AccessTokenGuard } from './guard/access-token.guard';
import { AuthUserType } from './types/auth-user.type';
import { AuthSignUpDto } from './dto/auth.sign-up.dto';
import { UserFromRequest } from './decorators/user-from-request';

@Resolver()
export class AuthResolver {
  @Inject()
  private service: AuthService;

  @Mutation(() => AuthDataType)
  signIn(@Args('payload') payload: AuthSignInDto) {
    return this.service.login(payload);
  }

  @Mutation(() => AuthDataType)
  signUp(@Args('payload') payload: AuthSignUpDto) {
    return this.service.register(payload);
  }

  @UseGuards(AccessTokenGuard)
  @Query(() => AuthUserType)
  me(@UserFromRequest() user: User) {
    return user;
  }
}
