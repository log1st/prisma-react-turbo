import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesUncheckedCreateWithoutPermissionInput {

    @Field(() => String, {nullable:false})
    roleId!: string;
}
