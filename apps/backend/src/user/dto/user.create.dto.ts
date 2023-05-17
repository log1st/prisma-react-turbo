import { Field, InputType, OmitType } from '@nestjs/graphql';
import { ValidateIf } from 'class-validator';
import { getValidationMessage } from '../../utils/validation/getValidationMessage';
import { Role } from '../../gql';
import { Exists } from '../../prisma/contstraints/exists.rule';
import { AuthSignUpDto } from '../../auth/dto/auth.sign-up.dto';

@InputType()
export class UserCreateDto extends OmitType(AuthSignUpDto, ['passwordConfirmation']) {
  @Exists('role', null, {
    message: getValidationMessage('exists'),
  })
  @ValidateIf((data) => data.roleId)
  @Field(() => [String], { nullable: true })
    roleId?: Role['id'];
}
