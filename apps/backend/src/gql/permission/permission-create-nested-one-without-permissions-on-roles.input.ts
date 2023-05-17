import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateWithoutPermissionsOnRolesInput } from './permission-create-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateOrConnectWithoutPermissionsOnRolesInput } from './permission-create-or-connect-without-permissions-on-roles.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';

@InputType()
export class PermissionCreateNestedOneWithoutPermissionsOnRolesInput {

    @Field(() => PermissionCreateWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionCreateWithoutPermissionsOnRolesInput)
    create?: PermissionCreateWithoutPermissionsOnRolesInput;

    @Field(() => PermissionCreateOrConnectWithoutPermissionsOnRolesInput, {nullable:true})
    @Type(() => PermissionCreateOrConnectWithoutPermissionsOnRolesInput)
    connectOrCreate?: PermissionCreateOrConnectWithoutPermissionsOnRolesInput;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    @Type(() => PermissionWhereUniqueInput)
    connect?: PermissionWhereUniqueInput;
}
