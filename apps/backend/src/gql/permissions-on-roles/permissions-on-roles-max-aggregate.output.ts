import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PermissionsOnRolesMaxAggregate {

    @Field(() => String, {nullable:true})
    permissionId?: string;

    @Field(() => String, {nullable:true})
    roleId?: string;
}
