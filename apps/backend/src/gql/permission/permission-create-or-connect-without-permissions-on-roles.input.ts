import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Type } from 'class-transformer';
import { PermissionCreateWithoutPermissionsOnRolesInput } from './permission-create-without-permissions-on-roles.input';

@InputType()
export class PermissionCreateOrConnectWithoutPermissionsOnRolesInput {

    @Field(() => PermissionWhereUniqueInput, {nullable:false})
    @Type(() => PermissionWhereUniqueInput)
    where!: PermissionWhereUniqueInput;

    @Field(() => PermissionCreateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => PermissionCreateWithoutPermissionsOnRolesInput)
    create!: PermissionCreateWithoutPermissionsOnRolesInput;
}
