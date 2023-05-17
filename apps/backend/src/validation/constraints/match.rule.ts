import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';

@ValidatorConstraint({ name: 'Match' })
@Injectable()
export class MatchRule implements ValidatorConstraintInterface {
  async validate(value: any, args: ValidationArguments) {
    const otherValue = (args.object as any)[args.constraints[0]];

    return value === otherValue;
  }
}

export const Match = (
  otherFieldName: string,
  validationOptions?: ValidationOptions,
) => (
  object: any,
  propertyName: string,
) => {
  registerDecorator({
    name: 'Match',
    target: object.constructor,
    propertyName,
    options: validationOptions,
    validator: MatchRule,
    constraints: [otherFieldName],
  });
};
