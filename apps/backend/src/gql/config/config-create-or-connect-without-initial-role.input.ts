import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { Type } from 'class-transformer';
import { ConfigCreateWithoutInitialRoleInput } from './config-create-without-initial-role.input';

@InputType()
export class ConfigCreateOrConnectWithoutInitialRoleInput {

    @Field(() => ConfigWhereUniqueInput, {nullable:false})
    @Type(() => ConfigWhereUniqueInput)
    where!: ConfigWhereUniqueInput;

    @Field(() => ConfigCreateWithoutInitialRoleInput, {nullable:false})
    @Type(() => ConfigCreateWithoutInitialRoleInput)
    create!: ConfigCreateWithoutInitialRoleInput;
}
