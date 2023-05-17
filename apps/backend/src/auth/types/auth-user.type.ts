import { ObjectType, PickType } from '@nestjs/graphql';
import { User } from '../../gql';

@ObjectType()
export class AuthUserType extends PickType(User, ['id', 'login', 'role', 'roleId']) {}
