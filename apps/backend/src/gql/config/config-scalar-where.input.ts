import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class ConfigScalarWhereInput {

    @Field(() => [ConfigScalarWhereInput], {nullable:true})
    AND?: Array<ConfigScalarWhereInput>;

    @Field(() => [ConfigScalarWhereInput], {nullable:true})
    OR?: Array<ConfigScalarWhereInput>;

    @Field(() => [ConfigScalarWhereInput], {nullable:true})
    NOT?: Array<ConfigScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    initialRoleId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;
}
