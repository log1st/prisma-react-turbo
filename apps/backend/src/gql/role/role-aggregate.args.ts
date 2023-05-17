import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleOrderByWithRelationAndSearchRelevanceInput } from './role-order-by-with-relation-and-search-relevance.input';
import { RoleWhereUniqueInput } from './role-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RoleCountAggregateInput } from './role-count-aggregate.input';
import { RoleMinAggregateInput } from './role-min-aggregate.input';
import { RoleMaxAggregateInput } from './role-max-aggregate.input';

@ArgsType()
export class RoleAggregateArgs {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => [RoleOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<RoleOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => RoleWhereUniqueInput, {nullable:true})
    cursor?: RoleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RoleCountAggregateInput, {nullable:true})
    _count?: RoleCountAggregateInput;

    @Field(() => RoleMinAggregateInput, {nullable:true})
    _min?: RoleMinAggregateInput;

    @Field(() => RoleMaxAggregateInput, {nullable:true})
    _max?: RoleMaxAggregateInput;
}
