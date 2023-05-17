import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { PermissionRelationFilter } from '../permission/permission-relation-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class PermissionsOnRolesWhereInput {

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    AND?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    OR?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => [PermissionsOnRolesWhereInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    permissionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    roleId?: StringFilter;

    @Field(() => PermissionRelationFilter, {nullable:true})
    permission?: PermissionRelationFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    role?: RoleRelationFilter;
}
