import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereInput } from '../permissions-on-roles/permissions-on-roles-where.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesOrderByWithRelationAndSearchRelevanceInput } from '../permissions-on-roles/permissions-on-roles-order-by-with-relation-and-search-relevance.input';
import { PermissionsOnRolesWhereUniqueInput } from '../permissions-on-roles/permissions-on-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesCountAggregateInput } from '../permissions-on-roles/permissions-on-roles-count-aggregate.input';
import { PermissionsOnRolesMinAggregateInput } from '../permissions-on-roles/permissions-on-roles-min-aggregate.input';
import { PermissionsOnRolesMaxAggregateInput } from '../permissions-on-roles/permissions-on-roles-max-aggregate.input';

@ArgsType()
export class PermissionsOnRolesAggregateArgs {

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    @Type(() => PermissionsOnRolesWhereInput)
    where?: PermissionsOnRolesWhereInput;

    @Field(() => [PermissionsOnRolesOrderByWithRelationAndSearchRelevanceInput], {nullable:true})
    orderBy?: Array<PermissionsOnRolesOrderByWithRelationAndSearchRelevanceInput>;

    @Field(() => PermissionsOnRolesWhereUniqueInput, {nullable:true})
    cursor?: PermissionsOnRolesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PermissionsOnRolesCountAggregateInput, {nullable:true})
    _count?: PermissionsOnRolesCountAggregateInput;

    @Field(() => PermissionsOnRolesMinAggregateInput, {nullable:true})
    _min?: PermissionsOnRolesMinAggregateInput;

    @Field(() => PermissionsOnRolesMaxAggregateInput, {nullable:true})
    _max?: PermissionsOnRolesMaxAggregateInput;
}
