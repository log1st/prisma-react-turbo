import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutPermissionsOnRolesInput } from './role-create-without-permissions-on-roles.input';

@InputType()
export class RoleCreateOrConnectWithoutPermissionsOnRolesInput {

    @Field(() => RoleWhereUniqueInput, {nullable:false})
    @Type(() => RoleWhereUniqueInput)
    where!: RoleWhereUniqueInput;

    @Field(() => RoleCreateWithoutPermissionsOnRolesInput, {nullable:false})
    @Type(() => RoleCreateWithoutPermissionsOnRolesInput)
    create!: RoleCreateWithoutPermissionsOnRolesInput;
}
