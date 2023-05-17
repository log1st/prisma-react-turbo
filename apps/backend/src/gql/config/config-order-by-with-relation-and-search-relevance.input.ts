import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RoleOrderByWithRelationAndSearchRelevanceInput } from '../role/role-order-by-with-relation-and-search-relevance.input';
import { ConfigOrderByRelevanceInput } from './config-order-by-relevance.input';

@InputType()
export class ConfigOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialRoleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => RoleOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    initialRole?: RoleOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => ConfigOrderByRelevanceInput, {nullable:true})
    _relevance?: ConfigOrderByRelevanceInput;
}
