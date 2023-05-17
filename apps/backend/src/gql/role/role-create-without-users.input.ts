import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateNestedManyWithoutRoleInput } from '../permissions-on-roles/permissions-on-roles-create-nested-many-without-role.input';
import { ConfigCreateNestedManyWithoutInitialRoleInput } from '../config/config-create-nested-many-without-initial-role.input';

@InputType()
export class RoleCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionsOnRolesCreateNestedManyWithoutRoleInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesCreateNestedManyWithoutRoleInput;

    @Field(() => ConfigCreateNestedManyWithoutInitialRoleInput, {nullable:true})
    config?: ConfigCreateNestedManyWithoutInitialRoleInput;
}
