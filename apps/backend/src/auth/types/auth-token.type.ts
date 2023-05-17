import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

export enum AuthTokenTypeEnum {
  bearer = 'Bearer',
}

registerEnumType(AuthTokenTypeEnum, {
  name: 'AuthTokenTypeEnum',
});

@ObjectType()
export class AuthTokenType {
  @Field(() => String, { nullable: false })
    token: string;

  @Field(() => Date, { nullable: false })
    expiresAt: Date;

  @Field(() => AuthTokenTypeEnum, { nullable: false })
    type: AuthTokenTypeEnum;
}
