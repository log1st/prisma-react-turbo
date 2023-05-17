import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesCreateNestedManyWithoutPermissionInput } from '../permissions-on-roles/permissions-on-roles-create-nested-many-without-permission.input';

@InputType()
export class PermissionCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    namespace!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => PermissionsOnRolesCreateNestedManyWithoutPermissionInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesCreateNestedManyWithoutPermissionInput;
}
