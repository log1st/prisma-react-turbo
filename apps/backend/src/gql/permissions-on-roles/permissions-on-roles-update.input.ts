import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput } from '../permission/permission-update-one-required-without-permissions-on-roles-nested.input';
import { RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput } from '../role/role-update-one-required-without-permissions-on-roles-nested.input';

@InputType()
export class PermissionsOnRolesUpdateInput {

    @Field(() => PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput;

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput;
}
