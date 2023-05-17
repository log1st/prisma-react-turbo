import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput } from '../permissions-on-roles/permissions-on-roles-unchecked-create-nested-many-without-role.input';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';

@InputType()
export class RoleUncheckedCreateWithoutConfigInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutRoleInput;
}
