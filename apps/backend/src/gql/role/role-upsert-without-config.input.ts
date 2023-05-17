import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleUpdateWithoutConfigInput } from './role-update-without-config.input';
import { Type } from 'class-transformer';
import { RoleCreateWithoutConfigInput } from './role-create-without-config.input';

@InputType()
export class RoleUpsertWithoutConfigInput {

    @Field(() => RoleUpdateWithoutConfigInput, {nullable:false})
    @Type(() => RoleUpdateWithoutConfigInput)
    update!: RoleUpdateWithoutConfigInput;

    @Field(() => RoleCreateWithoutConfigInput, {nullable:false})
    @Type(() => RoleCreateWithoutConfigInput)
    create!: RoleCreateWithoutConfigInput;
}
