import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateWithoutPermissionsOnRolesInput } from './role-create-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateOrConnectWithoutPermissionsOnRolesInput } from './role-create-or-connect-without-permissions-on-roles.input';
import { RoleUpsertWithoutPermissionsOnRolesInput } from './role-upsert-without-permissions-on-roles.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { RoleUpdateWithoutPermissionsOnRolesInput } from './role-update-without-permissions-on-roles.input';

@InputType()
export class RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput {

    @Field(() => RoleCreateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleCreateWithoutPermissionsOnRolesInput)
    create?: RoleCreateWithoutPermissionsOnRolesInput;

    @Field(() => RoleCreateOrConnectWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleCreateOrConnectWithoutPermissionsOnRolesInput)
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsOnRolesInput;

    @Field(() => RoleUpsertWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleUpsertWithoutPermissionsOnRolesInput)
    upsert?: RoleUpsertWithoutPermissionsOnRolesInput;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    @Type(() => RoleWhereUniqueInput)
    connect?: RoleWhereUniqueInput;

    @Field(() => RoleUpdateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => RoleUpdateWithoutPermissionsOnRolesInput)
    update?: RoleUpdateWithoutPermissionsOnRolesInput;
}
