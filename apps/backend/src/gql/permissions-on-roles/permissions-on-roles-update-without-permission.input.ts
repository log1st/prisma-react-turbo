import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput } from '../role/role-update-one-required-without-permissions-on-roles-nested.input';

@InputType()
export class PermissionsOnRolesUpdateWithoutPermissionInput {

    @Field(() => RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput, {nullable:true})
    role?: RoleUpdateOneRequiredWithoutPermissionsOnRolesNestedInput;
}
