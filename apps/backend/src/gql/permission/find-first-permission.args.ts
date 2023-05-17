import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';
import { Type } from 'class-transformer';
import { PermissionOrderByWithRelationAndSearchRelevanceInput } from './permission-order-by-with-relation-and-search-relevance.input';
import { PermissionWhereUniqueInput } from './permission-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionScalarFieldEnum } from './permission-scalar-field.enum';

@ArgsType()
export class FindFirstPermissionArgs {

    @Field(() => PermissionWhereInput, {nullable:true})
    @Type(() => PermissionWhereInput)
    where?: PermissionWhereInput;

    @Field(() => [PermissionOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PermissionOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PermissionWhereUniqueInput, {nullable:true})
    cursor?: PermissionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PermissionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionScalarFieldEnum>;
}
