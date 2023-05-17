import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionOrderByWithRelationAndSearchRelevanceInput } from '../permission/permission-order-by-with-relation-and-search-relevance.input';
import { RoleOrderByWithRelationAndSearchRelevanceInput } from '../role/role-order-by-with-relation-and-search-relevance.input';
import { PermissionsOnRolesOrderByRelevanceInput } from './permissions-on-roles-order-by-relevance.input';

@InputType()
export class PermissionsOnRolesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    permissionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    roleId?: keyof typeof SortOrder;

    @Field(() => PermissionOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    permission?: PermissionOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => RoleOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    role?: RoleOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => PermissionsOnRolesOrderByRelevanceInput, {nullable:true})
    _relevance?: PermissionsOnRolesOrderByRelevanceInput;
}
