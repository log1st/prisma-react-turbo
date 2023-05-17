import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi, RolesTag } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RoleUpdateRequest = contracts.RoleUpdateDto;

export type RoleUpdateResponse = contracts.Role;

export const roleUpdateEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    update: builder.mutation<
    RoleUpdateResponse,
    RoleUpdateRequest
    >({
      query: (input) => ({
        document: gql`
            mutation updateRole($input: RoleUpdateDto!) {
                updateRole(input: $input) {
                    id
                }
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('updateRole'),
      invalidatesTags: (result) => (result ? [
        {
          type: RolesTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
