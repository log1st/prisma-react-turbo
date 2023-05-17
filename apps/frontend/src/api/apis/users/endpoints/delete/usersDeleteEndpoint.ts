import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { usersApi, UsersTag } from '../../usersApi';
import { extractGraphqlResponse } from '@/api';

export type UsersDeleteRequest = Array<contracts.User['id']>;

export type UsersDeleteResponse = boolean;

export const usersDeleteEndpoint = usersApi.injectEndpoints({
  endpoints: (build) => ({
    delete: build.mutation<
    UsersDeleteResponse,
    UsersDeleteRequest
    >({
      query: (ids) => ({
        document: gql`
            mutation deleteUsers($ids: [String!]!) {
                deleteUsers(ids: $ids)
            }
        `,
        variables: {
          ids,
        },
      }),
      transformResponse: extractGraphqlResponse('deleteUsers'),
      invalidatesTags: (result, _, ids) => (result ? [
        {
          type: UsersTag.list,
          id: 'LIST',
        },
        ...ids.map((id) => ({
          type: UsersTag.list,
          id,
        })),
      ] : []),
    }),
  }),
  overrideExisting: true,
});
