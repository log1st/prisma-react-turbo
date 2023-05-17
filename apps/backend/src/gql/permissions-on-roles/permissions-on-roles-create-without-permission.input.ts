import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutPermissionsOnRolesInput } from '../role/role-create-nested-one-without-permissions-on-roles.input';

@InputType()
export class PermissionsOnRolesCreateWithoutPermissionInput {

    @Field(() => RoleCreateNestedOneWithoutPermissionsOnRolesInput, {nullable:false})
    role!: RoleCreateNestedOneWithoutPermissionsOnRolesInput;
}
