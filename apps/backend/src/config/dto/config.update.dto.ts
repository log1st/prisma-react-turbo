import { Field, InputType } from '@nestjs/graphql';
import { ValidateIf } from 'class-validator';
import { Exists } from '../../prisma/contstraints/exists.rule';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';

@InputType()
export class ConfigUpdateDto {
  @Exists('role', null, {
    message: getValidationMessage('exists'),
  })
  @ValidateIf((d) => !!d.intialRoleId)
  @Field(() => String, { nullable: true })
    initialRoleId?: string;
}
