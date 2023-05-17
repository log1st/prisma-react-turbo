import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { PermissionsOnRoles } from '../permissions-on-roles/permissions-on-roles.model';
import { User } from '../user/user.model';
import { Config } from '../config/config.model';
import { RoleCount } from './role-count.output';

@ObjectType()
export class Role {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [PermissionsOnRoles], {nullable:true})
    permissionsOnRoles?: Array<PermissionsOnRoles>;

    @Field(() => [User], {nullable:true})
    users?: Array<User>;

    @Field(() => [Config], {nullable:true})
    config?: Array<Config>;

    @Field(() => RoleCount, {nullable:false})
    _count?: RoleCount;
}
