import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsOnRoles } from '../permissions-on-roles/permissions-on-roles.model';
import { PermissionCount } from './permission-count.output';

@ObjectType()
export class Permission {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    namespace!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => [PermissionsOnRoles], {nullable:true})
    permissionsOnRoles?: Array<PermissionsOnRoles>;

    @Field(() => PermissionCount, {nullable:false})
    _count?: PermissionCount;
}
