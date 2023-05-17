import { User } from '../../gql';

export type AuthPayloadType = {
  sub: User['id'];
};
