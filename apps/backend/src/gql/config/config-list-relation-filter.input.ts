import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigWhereInput } from './config-where.input';

@InputType()
export class ConfigListRelationFilter {

    @Field(() => ConfigWhereInput, {nullable:true})
    every?: ConfigWhereInput;

    @Field(() => ConfigWhereInput, {nullable:true})
    some?: ConfigWhereInput;

    @Field(() => ConfigWhereInput, {nullable:true})
    none?: ConfigWhereInput;
}
