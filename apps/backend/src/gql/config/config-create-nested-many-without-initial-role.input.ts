import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigCreateWithoutInitialRoleInput } from './config-create-without-initial-role.input';
import { Type } from 'class-transformer';
import { ConfigCreateOrConnectWithoutInitialRoleInput } from './config-create-or-connect-without-initial-role.input';
import { ConfigCreateManyInitialRoleInputEnvelope } from './config-create-many-initial-role-input-envelope.input';
import { ConfigWhereUniqueInput } from './config-where-unique.input';

@InputType()
export class ConfigCreateNestedManyWithoutInitialRoleInput {

    @Field(() => [ConfigCreateWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigCreateWithoutInitialRoleInput)
    create?: Array<ConfigCreateWithoutInitialRoleInput>;

    @Field(() => [ConfigCreateOrConnectWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigCreateOrConnectWithoutInitialRoleInput)
    connectOrCreate?: Array<ConfigCreateOrConnectWithoutInitialRoleInput>;

    @Field(() => ConfigCreateManyInitialRoleInputEnvelope, {nullable:true})
    @Type(() => ConfigCreateManyInitialRoleInputEnvelope)
    createMany?: ConfigCreateManyInitialRoleInputEnvelope;

    @Field(() => [ConfigWhereUniqueInput], {nullable:true})
    @Type(() => ConfigWhereUniqueInput)
    connect?: Array<ConfigWhereUniqueInput>;
}
