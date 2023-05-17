import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { usersApi, UsersTag } from '../../usersApi';
import { extractGraphqlResponse } from '@/api';

export type UsersFetchOneRequest = contracts.User['id'];

export type UsersFetchOneResponse = contracts.User;

export const usersFetchOneEndpoint = usersApi.injectEndpoints({
  endpoints: (build) => ({
    fetchOne: build.query<
    UsersFetchOneResponse,
    UsersFetchOneRequest
    >({
      query: (id) => ({
        document: gql`
            query user($id: String!) {
                user(id: $id) {
                  id
                  role {
                    id
                    slug
                  }
                  roleId
                  login
                  createdAt
                }
            }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: extractGraphqlResponse('user'),
      providesTags: (result) => (result ? [
        {
          type: UsersTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
