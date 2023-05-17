import { ObjectType } from '@nestjs/graphql';
import { findManyResponseType } from '../../prisma/utils/findManyResponseType';
import { User } from '../../gql';

@ObjectType()
export class UserPaginationType extends findManyResponseType(User) {}
