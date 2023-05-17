import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionsOnRolesUpdateManyWithoutRoleNestedInput } from '../permissions-on-roles/permissions-on-roles-update-many-without-role-nested.input';
import { ConfigUpdateManyWithoutInitialRoleNestedInput } from '../config/config-update-many-without-initial-role-nested.input';

@InputType()
export class RoleUpdateWithoutUsersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUpdateManyWithoutRoleNestedInput;

    @Field(() => ConfigUpdateManyWithoutInitialRoleNestedInput, {nullable:true})
    config?: ConfigUpdateManyWithoutInitialRoleNestedInput;
}
