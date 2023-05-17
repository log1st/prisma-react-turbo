import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput } from '../permissions-on-roles/permissions-on-roles-unchecked-create-nested-many-without-permission.input';

@InputType()
export class PermissionUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    namespace!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUncheckedCreateNestedManyWithoutPermissionInput;
}
