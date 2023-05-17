import { Field, ObjectType } from '@nestjs/graphql';
import { AuthTokenType } from './auth-token.type';
import { AuthUserType } from './auth-user.type';

@ObjectType()
export class AuthDataType {
  @Field(() => AuthTokenType, { nullable: false })
    accessToken: AuthTokenType;

  @Field(() => AuthTokenType, { nullable: false })
    refreshToken: AuthTokenType;

  @Field(() => AuthUserType, { nullable: false })
    data: AuthUserType;
}
