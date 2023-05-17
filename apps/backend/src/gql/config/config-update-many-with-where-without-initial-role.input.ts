import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigScalarWhereInput } from './config-scalar-where.input';
import { Type } from 'class-transformer';
import { ConfigUpdateManyMutationInput } from './config-update-many-mutation.input';

@InputType()
export class ConfigUpdateManyWithWhereWithoutInitialRoleInput {

    @Field(() => ConfigScalarWhereInput, {nullable:false})
    @Type(() => ConfigScalarWhereInput)
    where!: ConfigScalarWhereInput;

    @Field(() => ConfigUpdateManyMutationInput, {nullable:false})
    @Type(() => ConfigUpdateManyMutationInput)
    data!: ConfigUpdateManyMutationInput;
}
