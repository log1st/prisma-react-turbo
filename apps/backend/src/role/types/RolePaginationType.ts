import { ObjectType } from '@nestjs/graphql';
import { findManyResponseType } from '../../prisma/utils/findManyResponseType';
import { Role } from '../../gql';

@ObjectType()
export class RolePaginationType extends findManyResponseType(Role) {}
