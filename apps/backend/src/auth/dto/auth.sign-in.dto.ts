import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import {
  AuthUser,
} from '../contstraints/auth-user.rule';

@InputType()
export class AuthSignInDto {
  @AuthUser('password', {
    message: getValidationMessage('notFound'),
  })
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    login: string;

  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    password: string;
}
