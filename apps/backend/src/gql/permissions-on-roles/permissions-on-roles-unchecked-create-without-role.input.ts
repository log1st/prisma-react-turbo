import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesUncheckedCreateWithoutRoleInput {

    @Field(() => String, {nullable:false})
    permissionId!: string;
}
