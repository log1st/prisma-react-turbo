import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PermissionsOnRolesCreateManyRoleInput {

    @Field(() => String, {nullable:false})
    permissionId!: string;
}
