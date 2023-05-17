import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput } from '../permission/permission-update-one-required-without-permissions-on-roles-nested.input';

@InputType()
export class PermissionsOnRolesUpdateWithoutRoleInput {

    @Field(() => PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput, {nullable:true})
    permission?: PermissionUpdateOneRequiredWithoutPermissionsOnRolesNestedInput;
}
