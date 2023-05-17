import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi, RolesTag } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RoleCreateRequest = contracts.RoleCreateDto;

export type RoleCreateResponse = contracts.Role;

export const roleCreateEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation<
    RoleCreateResponse,
    RoleCreateRequest
    >({
      query: (input) => ({
        document: gql`
            mutation createRole($input: RoleCreateDto!) {
                createRole(input: $input) {
                    id
                }
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('createRole'),
      invalidatesTags: (result) => (result ? [
        {
          type: RolesTag.list,
          id: 'LIST',
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
