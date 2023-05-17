import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { usersApi, UsersTag } from '../../usersApi';
import { extractGraphqlResponse } from '@/api';

export type UsersFetchRequest = contracts.FindManyUserArgs | void;

export type UsersFetchResponse = contracts.UserPaginationType;

export const usersFetchEndpoint = usersApi.injectEndpoints({
  endpoints: (build) => ({
    fetch: build.query<
    UsersFetchResponse,
    UsersFetchRequest
    >({
      query: (query) => ({
        document: gql`
            query usersList($query: FindManyUserArgs!) {
              usersList(query: $query) {
                take
                skip
                total
                records {
                  id
                  role {
                    id
                    slug
                  }
                  login
                  createdAt
                }
              }
            }
        `,
        variables: {
          query,
        },
      }),
      transformResponse: extractGraphqlResponse('usersList'),
      providesTags: (result) => (result ? [
        {
          type: UsersTag.list,
          id: 'LIST',
        },
        ...result.records.map((role) => ({
          type: UsersTag.list,
          id: role.id,
        })),
      ] : []),
    }),
  }),
  overrideExisting: true,
});
