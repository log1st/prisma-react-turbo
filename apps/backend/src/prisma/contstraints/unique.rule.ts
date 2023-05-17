import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { PrismaModel, PrismaService } from '../prisma.service';

type UniqueParams = {
  whereNot: {
    field: string;
    inputField: string;
  }
};

@ValidatorConstraint({ name: 'Unique' })
@Injectable()
export class UniqueRule implements ValidatorConstraintInterface {
  @Inject()
  private prisma: PrismaService;

  async validate(value: string, args: ValidationArguments) {
    const model = args.constraints[0] as PrismaModel;
    const params = args.constraints[1] as UniqueParams;

    const record = await (this.prisma[model] as any).findFirst({
      where: {
        [args.property]: value,
        ...(params?.whereNot && (args.object as any)[params.whereNot.inputField] ? {
          [params.whereNot.field]: {
            not: (args.object as any)[params.whereNot.inputField],
          },
        } : {}),
      },
    });

    return !record;
  }
}

export const Unique = (
  entityName: PrismaModel,
  params: UniqueParams | null,
  validationOptions?: ValidationOptions,
) => (
  object: any,
  propertyName: string,
) => {
  registerDecorator({
    name: 'Unique',
    target: object.constructor,
    propertyName,
    options: validationOptions,
    validator: UniqueRule,
    constraints: [entityName, params],
  });
};
