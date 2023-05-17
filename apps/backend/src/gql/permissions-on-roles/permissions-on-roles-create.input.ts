import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionCreateNestedOneWithoutPermissionsOnRolesInput } from '../permission/permission-create-nested-one-without-permissions-on-roles.input';
import { RoleCreateNestedOneWithoutPermissionsOnRolesInput } from '../role/role-create-nested-one-without-permissions-on-roles.input';

@InputType()
export class PermissionsOnRolesCreateInput {

    @Field(() => PermissionCreateNestedOneWithoutPermissionsOnRolesInput, {nullable:false})
    permission!: PermissionCreateNestedOneWithoutPermissionsOnRolesInput;

    @Field(() => RoleCreateNestedOneWithoutPermissionsOnRolesInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsOnRolesInput;
}
