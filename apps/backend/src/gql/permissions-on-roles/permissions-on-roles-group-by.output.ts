import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PermissionsOnRolesCountAggregate } from './permissions-on-roles-count-aggregate.output';
import { PermissionsOnRolesMinAggregate } from './permissions-on-roles-min-aggregate.output';
import { PermissionsOnRolesMaxAggregate } from './permissions-on-roles-max-aggregate.output';

@ObjectType()
export class PermissionsOnRolesGroupBy {

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => PermissionsOnRolesCountAggregate, {nullable:true})
    _count?: PermissionsOnRolesCountAggregate;

    @Field(() => PermissionsOnRolesMinAggregate, {nullable:true})
    _min?: PermissionsOnRolesMinAggregate;

    @Field(() => PermissionsOnRolesMaxAggregate, {nullable:true})
    _max?: PermissionsOnRolesMaxAggregate;
}
