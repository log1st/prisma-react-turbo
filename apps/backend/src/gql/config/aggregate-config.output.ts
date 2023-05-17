import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ConfigCountAggregate } from './config-count-aggregate.output';
import { ConfigMinAggregate } from './config-min-aggregate.output';
import { ConfigMaxAggregate } from './config-max-aggregate.output';

@ObjectType()
export class AggregateConfig {

    @Field(() => ConfigCountAggregate, {nullable:true})
    _count?: ConfigCountAggregate;

    @Field(() => ConfigMinAggregate, {nullable:true})
    _min?: ConfigMinAggregate;

    @Field(() => ConfigMaxAggregate, {nullable:true})
    _max?: ConfigMaxAggregate;
}
