import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigWhereInput } from './config-where.input';
import { Type } from 'class-transformer';
import { ConfigOrderByWithRelationAndSearchRelevanceInput } from './config-order-by-with-relation-and-search-relevance.input';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ConfigCountAggregateInput } from './config-count-aggregate.input';
import { ConfigMinAggregateInput } from './config-min-aggregate.input';
import { ConfigMaxAggregateInput } from './config-max-aggregate.input';

@ArgsType()
export class ConfigAggregateArgs {

    @Field(() => ConfigWhereInput, {nullable:true})
    @Type(() => ConfigWhereInput)
    where?: ConfigWhereInput;

    @Field(() => [ConfigOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<ConfigOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => ConfigWhereUniqueInput, {nullable:true})
    cursor?: ConfigWhereUniqueInput;

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
