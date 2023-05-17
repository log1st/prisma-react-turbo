import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesPermissionIdRoleIdCompoundUniqueInput } from './permissions-on-roles-permission-id-role-id-compound-unique.input';

@InputType()
export class PermissionsOnRolesWhereUniqueInput {

    @Field(() => PermissionsOnRolesPermissionIdRoleIdCompoundUniqueInput, {nullable:true})
    permissionId_roleId?: PermissionsOnRolesPermissionIdRoleIdCompoundUniqueInput;
}
