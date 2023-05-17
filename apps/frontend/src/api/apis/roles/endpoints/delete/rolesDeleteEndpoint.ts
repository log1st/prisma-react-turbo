import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi, RolesTag } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RolesDeleteRequest = Array<contracts.Role['id']>;

export type RolesDeleteResponse = boolean;

export const rolesDeleteEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    delete: builder.mutation<
    RolesDeleteResponse,
    RolesDeleteRequest
    >({
      query: (ids) => ({
        document: gql`
            mutation deleteRoles($ids: [String!]!) {
                deleteRoles(ids: $ids)
            }
        `,
        variables: {
          ids,
        },
      }),
      transformResponse: extractGraphqlResponse('deleteRoles'),
      invalidatesTags: (result, _, ids) => (result ? [
        {
          type: RolesTag.list,
          id: 'LIST',
        },
        ...ids.map((id) => ({
          type: RolesTag.list,
          id,
        })),
      ] : []),
    }),
  }),
  overrideExisting: true,
});
