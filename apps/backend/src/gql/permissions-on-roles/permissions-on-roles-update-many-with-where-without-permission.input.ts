import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionsOnRolesScalarWhereInput } from './permissions-on-roles-scalar-where.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesUncheckedUpdateManyWithoutPermissionsOnRolesInput } from './permissions-on-roles-unchecked-update-many-without-permissions-on-roles.input';

@InputType()
export class PermissionsOnRolesUpdateManyWithWhereWithoutPermissionInput {

    @Field(() => PermissionsOnRolesScalarWhereInput, {nullable:false})
    @Type(() => PermissionsOnRolesScalarWhereInput)
    where!: PermissionsOnRolesScalarWhereInput;

    @Field(() => PermissionsOnRolesUncheckedUpdateManyWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => PermissionsOnRolesUncheckedUpdateManyWithoutPermissionsOnRolesInput)
    data!: PermissionsOnRolesUncheckedUpdateManyWithoutPermissionsOnRolesInput;
}
