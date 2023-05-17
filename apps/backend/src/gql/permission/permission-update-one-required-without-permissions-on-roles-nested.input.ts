import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutPermissionsOnRolesInput } from './permission-create-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutPermissionsOnRolesInput } from './permission-create-or-connect-without-permissions-on-roles.input';
import { PermissionUpsertWithoutPermissionsOnRolesInput } from './permission-upsert-without-permissions-on-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { PermissionUpdateWithoutPermissionsOnRolesInput } from './permission-update-without-permissions-on-roles.input';

@InputType()
export class PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput {

    @Field(() => PermissionCreateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionCreateWithoutPermissionsOnRolesInput)
    create?: PermissionCreateWithoutPermissionsOnRolesInput;

    @Field(() => PermissionCreateOrConnectWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutPermissionsOnRolesInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionsOnRolesInput;

    @Field(() => PermissionUpsertWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionUpsertWithoutPermissionsOnRolesInput)
    upsert?: PermissionUpsertWithoutPermissionsOnRolesInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;

    @Field(() => PermissionUpdateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionUpdateWithoutPermissionsOnRolesInput)
    update?: PermissionUpdateWithoutPermissionsOnRolesInput;
}
