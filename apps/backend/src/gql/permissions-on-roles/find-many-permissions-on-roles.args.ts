import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesOrderByWithRelationAndSearchRelevanceInput } from './permissions-on-roles-order-by-with-relation-and-search-relevance.input';
import { PermissionsOnRolesWhereUniqueInput } from './permissions-on-roles-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PermissionsOnRolesScalarFieldEnum } from './permissions-on-roles-scalar-field.enum';

@ArgsType()
export class FindManyPermissionsOnRolesArgs {

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

    @Field(() => [PermissionsOnRolesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PermissionsOnRolesScalarFieldEnum>;
}
