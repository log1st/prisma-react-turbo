import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PermissionsOnRolesScalarWhereInput {

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    AND?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    OR?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => [PermissionsOnRolesScalarWhereInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    permissionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;
}
