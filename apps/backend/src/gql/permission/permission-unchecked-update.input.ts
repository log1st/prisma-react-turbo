import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { PermissionsOnRolesUncheckedUpdateManyWithoutPermissionNestedInput } from '../permissions-on-roles/permissions-on-roles-unchecked-update-many-without-permission-nested.input';

@InputType()
export class PermissionUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    namespace?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => PermissionsOnRolesUncheckedUpdateManyWithoutPermissionNestedInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesUncheckedUpdateManyWithoutPermissionNestedInput;
}
