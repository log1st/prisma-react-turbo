import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutConfigInput } from './role-create-without-config.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutConfigInput } from './role-create-or-connect-without-config.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutConfigInput {

    @Field(() => RoleCreateWithoutConfigInput, {nullable:true})
    @Type(() => RoleCreateWithoutConfigInput)
    create?: RoleCreateWithoutConfigInput;

    @Field(() => RoleCreateOrConnectWithoutConfigInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutConfigInput)
    connectOrCreate?: RoleCreateOrConnectWithoutConfigInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;
}
