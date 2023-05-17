import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutConfigInput } from './role-create-without-config.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutConfigInput } from './role-create-or-connect-without-config.input';
import { RoleUpsertWithoutConfigInput } from './role-upsert-without-config.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutConfigInput } from './role-update-without-config.input';

@InputType()
export class RoleUpdateOneWithoutConfigNestedInput {

    @Field(() => RoleCreateWithoutConfigInput, {nullable:true})
    @Type(() => RoleCreateWithoutConfigInput)
    create?: RoleCreateWithoutConfigInput;

    @Field(() => RoleCreateOrConnectWithoutConfigInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutConfigInput)
    connectOrCreate?: RoleCreateOrConnectWithoutConfigInput;

    @Field(() => RoleUpsertWithoutConfigInput, {nullable:true})
    @Type(() => RoleUpsertWithoutConfigInput)
    upsert?: RoleUpsertWithoutConfigInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutConfigInput, {nullable:true})
    @Type(() => RoleUpdateWithoutConfigInput)
    update?: RoleUpdateWithoutConfigInput;
}
