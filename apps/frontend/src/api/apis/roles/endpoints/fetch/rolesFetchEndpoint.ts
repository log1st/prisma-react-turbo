import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi, RolesTag } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RolesFetchRequest = contracts.FindManyRoleArgs | void;

export type RolesFetchResponse = contracts.RolePaginationType;

export const rolesFetchEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    fetch: builder.query<
    RolesFetchResponse,
    RolesFetchRequest
    >({
      query: (query = {}) => ({
        document: gql`
            query rolesList($query: FindManyRoleArgs!) {
                rolesList(query: $query) {
                    take
                    skip
                    total
                    records {
                        id
                        slug
                        createdAt
                        permissionsOnRoles {
                            permission {
                                namespace
                                slug
                            }
                        }
                        _count {
                          permissionsOnRoles
                        }
                    }
                }
            }
        `,
        variables: {
          query,
        },
      }),
      transformResponse: extractGraphqlResponse('rolesList'),
      providesTags: (result) => (result ? [
        {
          type: RolesTag.list,
          id: 'LIST',
        },
        ...result.records.map((role) => ({
          type: RolesTag.list,
          id: role.id,
        })),
      ] : []),
    }),
  }),
  overrideExisting: true,
});
