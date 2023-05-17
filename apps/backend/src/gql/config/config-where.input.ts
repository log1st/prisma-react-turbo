import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { RoleRelationFilter } from '../role/role-relation-filter.input';

@InputType()
export class ConfigWhereInput {

    @Field(() => [ConfigWhereInput], {nullable:true})
    AND?: Array<ConfigWhereInput>;

    @Field(() => [ConfigWhereInput], {nullable:true})
    OR?: Array<ConfigWhereInput>;

    @Field(() => [ConfigWhereInput], {nullable:true})
    NOT?: Array<ConfigWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    initialRoleId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => RoleRelationFilter, {nullable:true})
    initialRole?: RoleRelationFilter;
}
