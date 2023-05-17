import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import { Unique } from '../../prisma/contstraints/unique.rule';
import { Permission } from '../../gql';
import { Exists } from '../../prisma/contstraints/exists.rule';

@InputType()
export class RoleCreateDto {
  @Unique('role', {
    whereNot: {
      field: 'id',
      inputField: 'id',
    },
  }, {
    message: getValidationMessage('unique'),
  })
  @MaxLength(32, {
    message: getValidationMessage('maxLength'),
  })
  @MinLength(4, {
    message: getValidationMessage('minLength'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    slug: string;

  @Exists('permission', null, {
    message: getValidationMessage('exists'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => [String], { nullable: false })
    permissions: Array<Permission['id']>;
}
