import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsOnRolesUncheckedUpdateManyInput } from './permissions-on-roles-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { PermissionsOnRolesWhereInput } from './permissions-on-roles-where.input';

@ArgsType()
export class UpdateManyPermissionsOnRolesArgs {

    @Field(() => PermissionsOnRolesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => PermissionsOnRolesUncheckedUpdateManyInput)
    data!: PermissionsOnRolesUncheckedUpdateManyInput;

    @Field(() => PermissionsOnRolesWhereInput, {nullable:true})
    @Type(() => PermissionsOnRolesWhereInput)
    where?: PermissionsOnRolesWhereInput;
}
