import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { Type } from 'class-transformer';
import { ConfigUpdateWithoutInitialRoleInput } from './config-update-without-initial-role.input';

@InputType()
export class ConfigUpdateWithWhereUniqueWithoutInitialRoleInput {

    @Field(() => ConfigWhereUniqueInput, {nullable:false})
    @Type(() => ConfigWhereUniqueInput)
    where!: ConfigWhereUniqueInput;

    @Field(() => ConfigUpdateWithoutInitialRoleInput, {nullable:false})
    @Type(() => ConfigUpdateWithoutInitialRoleInput)
    data!: ConfigUpdateWithoutInitialRoleInput;
}
