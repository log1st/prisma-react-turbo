import { ValidationArguments } from 'class-validator';

export const getValidationMessage = (type: string) => (
  ({ constraints, property }: ValidationArguments) => JSON.stringify({
    type,
    property,
    constraints,
  })
);
