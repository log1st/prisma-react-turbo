import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput } from '../permissions-on-roles/permissions-on-roles-unchecked-update-many-without-role-nested.input';
import { UserUncheckedUpdateManyWithoutRoleNestedInput } from '../user/user-unchecked-update-many-without-role-nested.input';
import { ConfigUncheckedUpdateManyWithoutInitialRoleNestedInput } from '../config/config-unchecked-update-many-without-initial-role-nested.input';

@InputType()
export class RoleUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => UserUncheckedUpdateManyWithoutRoleNestedInput, {nullable:true})
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput;

    @Field(() => ConfigUncheckedUpdateManyWithoutInitialRoleNestedInput, {nullable:true})
    config?: ConfigUncheckedUpdateManyWithoutInitialRoleNestedInput;
}
