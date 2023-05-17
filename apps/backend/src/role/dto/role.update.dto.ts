import { Field, InputType, PartialType } from '@nestjs/graphql';
import {
  IsNotEmpty,
} from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import { RoleCreateDto } from './role.create.dto';

@InputType()
export class RoleUpdateDto extends PartialType(RoleCreateDto) {
  @IsNotEmpty({
    message: getValidationMessage('empty'),
  })
  @Field(() => String, { nullable: false })
    id: string;
}
