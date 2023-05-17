import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutRoleInput } from '../user/user-unchecked-create-nested-many-without-role.input';
import { ConfigUncheckedCreateNestedManyWithoutInitialRoleInput } from '../config/config-unchecked-create-nested-many-without-initial-role.input';

@InputType()
export class RoleUncheckedCreateWithoutPermissionsOnRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutRoleInput, {nullable:true})
    users?: UserUncheckedCreateNestedManyWithoutRoleInput;

    @Field(() => ConfigUncheckedCreateNestedManyWithoutInitialRoleInput, {nullable:true})
    config?: ConfigUncheckedCreateNestedManyWithoutInitialRoleInput;
}
