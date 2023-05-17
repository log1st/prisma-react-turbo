import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesPermissionIdRoleIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => String, {nullable:false})
    roleId!: string;
}
