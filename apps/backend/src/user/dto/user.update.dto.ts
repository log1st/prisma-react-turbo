import { Field, InputType, PartialType } from '@nestjs/graphql';
import {
  IsNotEmpty, ValidateIf,
} from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import { UserCreateDto } from './user.create.dto';

@InputType()
export class UserUpdateDto extends PartialType(UserCreateDto) {
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    id: string;

  @ValidateIf((data) => data.password)
  declare password: string;
}
