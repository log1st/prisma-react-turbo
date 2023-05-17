import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigCreateWithoutInitialRoleInput } from './config-create-without-initial-role.input';
import { Type } from 'class-transformer';
import { ConfigCreateOrConnectWithoutInitialRoleInput } from './config-create-or-connect-without-initial-role.input';
import { ConfigUpsertWithWhereUniqueWithoutInitialRoleInput } from './config-upsert-with-where-unique-without-initial-role.input';
import { ConfigCreateManyInitialRoleInputEnvelope } from './config-create-many-initial-role-input-envelope.input';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { ConfigUpdateWithWhereUniqueWithoutInitialRoleInput } from './config-update-with-where-unique-without-initial-role.input';
import { ConfigUpdateManyWithWhereWithoutInitialRoleInput } from './config-update-many-with-where-without-initial-role.input';
import { ConfigScalarWhereInput } from './config-scalar-where.input';

@InputType()
export class ConfigUncheckedUpdateManyWithoutInitialRoleNestedInput {

    @Field(() => [ConfigCreateWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigCreateWithoutInitialRoleInput)
    create?: Array<ConfigCreateWithoutInitialRoleInput>;

    @Field(() => [ConfigCreateOrConnectWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigCreateOrConnectWithoutInitialRoleInput)
    connectOrCreate?: Array<ConfigCreateOrConnectWithoutInitialRoleInput>;

    @Field(() => [ConfigUpsertWithWhereUniqueWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigUpsertWithWhereUniqueWithoutInitialRoleInput)
    upsert?: Array<ConfigUpsertWithWhereUniqueWithoutInitialRoleInput>;

    @Field(() => ConfigCreateManyInitialRoleInputEnvelope, {nullable:true})
    @Type(() => ConfigCreateManyInitialRoleInputEnvelope)
    createMany?: ConfigCreateManyInitialRoleInputEnvelope;

    @Field(() => [ConfigWhereUniqueInput], {nullable:true})
    @Type(() => ConfigWhereUniqueInput)
    set?: Array<ConfigWhereUniqueInput>;

    @Field(() => [ConfigWhereUniqueInput], {nullable:true})
    @Type(() => ConfigWhereUniqueInput)
    disconnect?: Array<ConfigWhereUniqueInput>;

    @Field(() => [ConfigWhereUniqueInput], {nullable:true})
    @Type(() => ConfigWhereUniqueInput)
    delete?: Array<ConfigWhereUniqueInput>;

    @Field(() => [ConfigWhereUniqueInput], {nullable:true})
    @Type(() => ConfigWhereUniqueInput)
    connect?: Array<ConfigWhereUniqueInput>;

    @Field(() => [ConfigUpdateWithWhereUniqueWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigUpdateWithWhereUniqueWithoutInitialRoleInput)
    update?: Array<ConfigUpdateWithWhereUniqueWithoutInitialRoleInput>;

    @Field(() => [ConfigUpdateManyWithWhereWithoutInitialRoleInput], {nullable:true})
    @Type(() => ConfigUpdateManyWithWhereWithoutInitialRoleInput)
    updateMany?: Array<ConfigUpdateManyWithWhereWithoutInitialRoleInput>;

    @Field(() => [ConfigScalarWhereInput], {nullable:true})
    @Type(() => ConfigScalarWhereInput)
    deleteMany?: Array<ConfigScalarWhereInput>;
}
