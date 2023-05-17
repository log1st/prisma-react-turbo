import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigWhereInput } from './config-where.input';
import { Type } from 'class-transformer';
import { ConfigOrderByWithAggregationInput } from './config-order-by-with-aggregation.input';
import { ConfigScalarFieldEnum } from './config-scalar-field.enum';
import { ConfigScalarWhereWithAggregatesInput } from './config-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ConfigCountAggregateInput } from './config-count-aggregate.input';
import { ConfigMinAggregateInput } from './config-min-aggregate.input';
import { ConfigMaxAggregateInput } from './config-max-aggregate.input';

@ArgsType()
export class ConfigGroupByArgs {

    @Field(() => ConfigWhereInput, {nullable:true})
    @Type(() => ConfigWhereInput)
    where?: ConfigWhereInput;

    @Field(() => [ConfigOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ConfigOrderByWithAggregationInput>;

    @Field(() => [ConfigScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ConfigScalarFieldEnum>;

    @Field(() => ConfigScalarWhereWithAggregatesInput, {nullable:true})
    having?: ConfigScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ConfigCountAggregateInput, {nullable:true})
    _count?: ConfigCountAggregateInput;

    @Field(() => ConfigMinAggregateInput, {nullable:true})
    _min?: ConfigMinAggregateInput;

    @Field(() => ConfigMaxAggregateInput, {nullable:true})
    _max?: ConfigMaxAggregateInput;
}
