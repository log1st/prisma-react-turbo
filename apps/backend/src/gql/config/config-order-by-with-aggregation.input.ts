import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ConfigCountOrderByAggregateInput } from './config-count-order-by-aggregate.input';
import { ConfigMaxOrderByAggregateInput } from './config-max-order-by-aggregate.input';
import { ConfigMinOrderByAggregateInput } from './config-min-order-by-aggregate.input';

@InputType()
export class ConfigOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    initialRoleId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    active?: keyof typeof SortOrder;

    @Field(() => ConfigCountOrderByAggregateInput, {nullable:true})
    _count?: ConfigCountOrderByAggregateInput;

    @Field(() => ConfigMaxOrderByAggregateInput, {nullable:true})
    _max?: ConfigMaxOrderByAggregateInput;

    @Field(() => ConfigMinOrderByAggregateInput, {nullable:true})
    _min?: ConfigMinOrderByAggregateInput;
}
