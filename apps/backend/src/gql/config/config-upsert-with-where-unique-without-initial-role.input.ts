import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { Type } from 'class-transformer';
import { ConfigUpdateWithoutInitialRoleInput } from './config-update-without-initial-role.input';
import { ConfigCreateWithoutInitialRoleInput } from './config-create-without-initial-role.input';

@InputType()
export class ConfigUpsertWithWhereUniqueWithoutInitialRoleInput {

    @Field(() => ConfigWhereUniqueInput, {nullable:false})
    @Type(() => ConfigWhereUniqueInput)
    where!: ConfigWhereUniqueInput;

    @Field(() => ConfigUpdateWithoutInitialRoleInput, {nullable:false})
    @Type(() => ConfigUpdateWithoutInitialRoleInput)
    update!: ConfigUpdateWithoutInitialRoleInput;

    @Field(() => ConfigCreateWithoutInitialRoleInput, {nullable:false})
    @Type(() => ConfigCreateWithoutInitialRoleInput)
    create!: ConfigCreateWithoutInitialRoleInput;
}
