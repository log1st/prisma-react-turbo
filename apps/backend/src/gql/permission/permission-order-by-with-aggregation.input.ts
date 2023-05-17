import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PermissionCountOrderByAggregateInput } from './permission-count-order-by-aggregate.input';
import { PermissionMaxOrderByAggregateInput } from './permission-max-order-by-aggregate.input';
import { PermissionMinOrderByAggregateInput } from './permission-min-order-by-aggregate.input';

@InputType()
export class PermissionOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    namespace?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => PermissionCountOrderByAggregateInput, {nullable:true})
    _count?: PermissionCountOrderByAggregateInput;

    @Field(() => PermissionMaxOrderByAggregateInput, {nullable:true})
    _max?: PermissionMaxOrderByAggregateInput;

    @Field(() => PermissionMinOrderByAggregateInput, {nullable:true})
    _min?: PermissionMinOrderByAggregateInput;
}
