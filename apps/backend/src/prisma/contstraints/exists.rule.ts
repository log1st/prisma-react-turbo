import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { arrayFrom } from '@oapis/common';
import { PrismaModel, PrismaService } from '../prisma.service';

export type ExistsParams = {

} | null;

@ValidatorConstraint({ name: 'Exists' })
@Injectable()
export class ExistsRule implements ValidatorConstraintInterface {
  @Inject()
  private prisma: PrismaService;

  async validate(value: any, args: ValidationArguments) {
    const model = args.constraints[0] as PrismaModel;

    const ids = arrayFrom(value);

    if (!ids.length) {
      return true;
    }

    const count = await (this.prisma[model] as any).count({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return count === ids.length;
  }
}

export const Exists = (
  entityName: PrismaModel,
  params: ExistsParams | null,
  validationOptions?: ValidationOptions,
) => (
  object: any,
  propertyName: string,
) => {
  registerDecorator({
    name: 'Exists',
    target: object.constructor,
    propertyName,
    options: validationOptions,
    validator: ExistsRule,
    constraints: [entityName, params],
  });
};
