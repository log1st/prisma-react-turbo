import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionsOnRolesOrderByRelationAggregateInput } from '../permissions-on-roles/permissions-on-roles-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { ConfigOrderByRelationAggregateInput } from '../config/config-order-by-relation-aggregate.input';
import { RoleOrderByRelevanceInput } from './role-order-by-relevance.input';

@InputType()
export class RoleOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => PermissionsOnRolesOrderByRelationAggregateInput, {nullable:true})
    permissionsOnRoles?: PermissionsOnRolesOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    users?: UserOrderByRelationAggregateInput;

    @Field(() => ConfigOrderByRelationAggregateInput, {nullable:true})
    config?: ConfigOrderByRelationAggregateInput;

    @Field(() => RoleOrderByRelevanceInput, {nullable:true})
    _relevance?: RoleOrderByRelevanceInput;
}
