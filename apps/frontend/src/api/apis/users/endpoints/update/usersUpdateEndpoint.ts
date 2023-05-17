import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { usersApi, UsersTag } from '../../usersApi';
import { extractGraphqlResponse } from '@/api';

export type UsersUpdateRequest = contracts.UserUpdateDto;

export type UsersUpdateResponse = contracts.User;

export const usersUpdateEndpoint = usersApi.injectEndpoints({
  endpoints: (build) => ({
    update: build.mutation<
    UsersUpdateResponse,
    UsersUpdateRequest
    >({
      query: (input) => ({
        document: gql`
            mutation updateUser($input: UserUpdateDto!) {
                updateUser(input: $input) {
                  id
                }
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('updateUser'),
      invalidatesTags: (result) => (result ? [
        {
          type: UsersTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
