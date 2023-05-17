import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsOnRolesOrderByRelationAggregateInput } from '../permissions-on-roles/permissions-on-roles-order-by-relation-aggregate.input';
import { PermissionOrderByRelevanceInput } from './permission-order-by-relevance.input';

@InputType()
export class PermissionOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    namespace?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => PermissionsOnRolesOrderByRelationAggregateInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesOrderByRelationAggregateInput;

    @Field(() => PermissionOrderByRelevanceInput, {nullable:true})
    _relevance?: PermissionOrderByRelevanceInput;
}
