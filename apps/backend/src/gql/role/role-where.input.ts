import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PermissionsOnRolesListRelationFilter } from '../permissions-on-roles/permissions-on-roles-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { ConfigListRelationFilter } from '../config/config-list-relation-filter.input';

@InputType()
export class RoleWhereInput {

    @Field(() => [RoleWhereInput], {nullable:true})
    AND?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    OR?: Array<RoleWhereInput>;

    @Field(() => [RoleWhereInput], {nullable:true})
    NOT?: Array<RoleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => PermissionsOnRolesListRelationFilter, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    users?: UserListRelationFilter;

    @Field(() => ConfigListRelationFilter, {nullable:true})
    config?: ConfigListRelationFilter;
}
