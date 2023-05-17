import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutConfigInput } from '../role/role-create-nested-one-without-config.input';

@InputType()
export class ConfigCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:false})
    active!: boolean;

    @Field(() => RoleCreateNestedOneWithoutConfigInput, {nullable:true})
    initialRole?: RoleCreateNestedOneWithoutConfigInput;
}
