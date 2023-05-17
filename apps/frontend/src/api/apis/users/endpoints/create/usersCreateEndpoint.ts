import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { usersApi, UsersTag } from '../../usersApi';
import { extractGraphqlResponse } from '@/api';

export type UsersCreateRequest = contracts.UserCreateDto;

export type UsersCreateResponse = contracts.User;

export const usersCreateEndpoint = usersApi.injectEndpoints({
  endpoints: (build) => ({
    create: build.mutation<
    UsersCreateResponse,
    UsersCreateRequest
    >({
      query: (input) => ({
        document: gql`
            mutation createUser($input: UserCreateDto!) {
                createUser(input: $input) {
                  id
                }
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('createUser'),
      invalidatesTags: (result) => (result ? [
        {
          type: UsersTag.list,
          id: 'LIST',
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
