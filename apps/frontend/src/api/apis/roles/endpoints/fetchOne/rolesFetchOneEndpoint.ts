import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi, RolesTag } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RolesFetchOneRequest = contracts.Role['id'];

export type RolesFetchOneResponse = contracts.Role;

export const rolesFetchOneEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchOne: builder.query<
    RolesFetchOneResponse,
    RolesFetchOneRequest
    >({
      query: (id) => ({
        document: gql`
            query role($id: String!) {
                role(id: $id) {
                    id
                    slug
                    permissionsOnRoles {
                        permissionId
                        permission {
                            id
                            namespace
                            slug
                        }
                    }
                }
            }
        `,
        variables: {
          id,
        },
      }),
      transformResponse: extractGraphqlResponse('role'),
      providesTags: (result) => (result ? [
        {
          type: RolesTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
});
