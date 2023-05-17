import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateWithoutPermissionsOnRolesInput } from './permission-update-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutPermissionsOnRolesInput } from './permission-create-without-permissions-on-roles.input';

@InputType()
export class PermissionUpsertWithoutPermissionsOnRolesInput {

    @Field(() => PermissionUpdateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => PermissionUpdateWithoutPermissionsOnRolesInput)
    update!: PermissionUpdateWithoutPermissionsOnRolesInput;

    @Field(() => PermissionCreateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => PermissionCreateWithoutPermissionsOnRolesInput)
    create!: PermissionCreateWithoutPermissionsOnRolesInput;
}
