import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../../user/user.service';
import { authSignInPermission } from '../../role/permissions';

@ValidatorConstraint({ name: 'UserExists' })
@Injectable()
export class AuthUserRule implements ValidatorConstraintInterface {
  @Inject()
  private userService: UserService;

  async validate(login: string, args: ValidationArguments) {
    const password = (args.object as any)[args.constraints[0]];

    if (!(login && password)) {
      return true;
    }

    try {
      const user = await this.userService.getBuilder().findFirstOrThrow({
        where: {
          login,
          role: {
            permissionsOnRoles: {
              some: {
                permission: authSignInPermission,
              },
            },
          },
        },
      });

      return user && user.password === password;
    } catch (e) {
      return false;
    }
  }
}

export const AuthUser = (
  passwordField: string,
  validationOptions?: ValidationOptions,
) => (
  object: any,
  propertyName: string,
) => {
  registerDecorator({
    name: 'UserExists',
    target: object.constructor,
    propertyName,
    options: validationOptions,
    validator: AuthUserRule,
    constraints: [passwordField],
  });
};
