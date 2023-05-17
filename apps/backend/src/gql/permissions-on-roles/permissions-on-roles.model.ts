import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Permission } from '../permission/permission.model';
import { Role } from '../role/role.model';

@ObjectType()
export class PermissionsOnRoles {

    @Field(() => String, {nullable:false})
    permissionId!: string;

    @Field(() => String, {nullable:false})
    roleId!: string;

    @Field(() => Permission, {nullable:false})
    permission?: Permission;

    @Field(() => Role, {nullable:false})
    role?: Role;
}
