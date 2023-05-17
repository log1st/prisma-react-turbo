import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConfigCreateManyInitialRoleInput } from './config-create-many-initial-role.input';
import { Type } from 'class-transformer';

@InputType()
export class ConfigCreateManyInitialRoleInputEnvelope {

    @Field(() => [ConfigCreateManyInitialRoleInput], {nullable:false})
    @Type(() => ConfigCreateManyInitialRoleInput)
    data!: Array<ConfigCreateManyInitialRoleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
