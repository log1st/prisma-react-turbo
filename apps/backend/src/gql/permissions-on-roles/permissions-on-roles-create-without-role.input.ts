import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutPermissionsOnRolesInput } from '../permission/permission-create-nested-one-without-permissions-on-roles.input';

@InputType()
export class PermissionsOnRolesCreateWithoutRoleInput {

    @Field(() => PermissionCreateNestedOneWithoutPermissionsOnRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutPermissionsOnRolesInput;
}
