import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutRoleInput } from '../user/user-create-nested-many-without-role.input';
import { ConfigCreateNestedManyWithoutInitialRoleInput } from '../config/config-create-nested-many-without-initial-role.input';

@InputType()
export class RoleCreateWithoutPermissionsOnRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserCreateNestedManyWithoutRoleInput;

    @Field(() => ConfigCreateNestedManyWithoutInitialRoleInput, {nullable:true})
    config?: ConfigCreateNestedManyWithoutInitialRoleInput;
}
