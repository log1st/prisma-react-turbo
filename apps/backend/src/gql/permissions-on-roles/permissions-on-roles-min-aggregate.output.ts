import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRolesMinAggregate {

    @Field(() => String, {nullable:true})
    permissionId?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;
}
