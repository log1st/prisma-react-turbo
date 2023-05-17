import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutConfigInput } from './role-create-without-config.input';

@InputType()
export class RoleCreateOrConnectWithoutConfigInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutConfigInput, {nullable:false})
    @Type(() => RoleCreateWithoutConfigInput)
    create!: RoleCreateWithoutConfigInput;
}
