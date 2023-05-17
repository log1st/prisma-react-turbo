import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ConfigScalarWhereWithAggregatesInput {

    @Field(() => [ConfigScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ConfigScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ConfigScalarWhereWithAggregatesInput>;

    @Field(() => [ConfigScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ConfigScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    initialRoleId?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    active?: BoolWithAggregatesFilter;
}
