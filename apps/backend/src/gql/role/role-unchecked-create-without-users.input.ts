import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput } from '../permissions-on-roles/permissions-on-roles-unchecked-create-nested-many-without-role.input';
import { ConfigUncheckedCreateNestedManyWithoutInitialRoleInput } from '../config/config-unchecked-create-nested-many-without-initial-role.input';

@InputType()
export class RoleUncheckedCreateWithoutUsersInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => ConfigUncheckedCreateNestedManyWithoutInitialRoleInput, {nullable:true})
    config?: ConfigUncheckedCreateNestedManyWithoutInitialRoleInput;
}
