import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutPermissionsOnRolesInput } from './role-update-without-permissions-on-roles.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionsOnRolesInput } from './role-create-without-permissions-on-roles.input';

@InputType()
export class RoleUpsertWithoutPermissionsOnRolesInput {

    @Field(() => RoleUpdateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => RoleUpdateWithoutPermissionsOnRolesInput)
    update!: RoleUpdateWithoutPermissionsOnRolesInput;

    @Field(() => RoleCreateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionsOnRolesInput)
    create!: RoleCreateWithoutPermissionsOnRolesInput;
}
