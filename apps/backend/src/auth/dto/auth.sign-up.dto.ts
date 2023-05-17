import { Field, InputType } from '@nestjs/graphql';
import {
  IsNotEmpty, Matches, MaxLength, MinLength,
} from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import { Unique } from '../../prisma/contstraints/unique.rule';
import { Match } from '../../validation/constraints/match.rule';

@InputType()
export class AuthSignUpDto {
  @Unique('user', {
    whereNot: {
      field: 'id',
      inputField: 'id',
    },
  }, {
    message: getValidationMessage('unique'),
  })
  @Matches(/^[\w_]+$/, {
    message: getValidationMessage('matches'),
  })
  @MaxLength(32, {
    message: getValidationMessage('maxLength'),
  })
  @MinLength(5, {
    message: getValidationMessage('minLength'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    login: string;

  @MaxLength(32, {
    message: getValidationMessage('maxLength'),
  })
  @MinLength(8, {
    message: getValidationMessage('minLength'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    password: string;

  @Match('password', {
    message: getValidationMessage('match'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    passwordConfirmation: string;
}
