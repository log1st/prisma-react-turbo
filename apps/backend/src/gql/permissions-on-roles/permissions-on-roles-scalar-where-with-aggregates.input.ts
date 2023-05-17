import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PermissionsOnRolesScalarWhereWithAggregatesInput {

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => [PermissionsOnRolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PermissionsOnRolesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    permissionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    roleId?: StringWithAggregatesFilter;
}
