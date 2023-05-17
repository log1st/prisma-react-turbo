import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsOnRolesInput } from './role-create-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionsOnRolesInput } from './role-create-or-connect-without-permissions-on-roles.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';

@InputType()
export class RoleCreateNestedOneWithoutPermissionsOnRolesInput {

    @Field(() => RoleCreateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleCreateWithoutPermissionsOnRolesInput)
    create?: RoleCreateWithoutPermissionsOnRolesInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionsOnRolesInput)
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsOnRolesInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;
}
