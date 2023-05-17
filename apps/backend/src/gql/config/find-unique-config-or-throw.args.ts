import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConfigWhereUniqueInput } from './config-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueConfigOrThrowArgs {

    @Field(() => ConfigWhereUniqueInput, {nullable:false})
    @Type(() => ConfigWhereUniqueInput)
    where!: ConfigWhereUniqueInput;
}
