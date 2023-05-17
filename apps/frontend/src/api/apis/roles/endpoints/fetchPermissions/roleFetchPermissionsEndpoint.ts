import { contracts } from '@oapis/contracts';
import { gql } from 'graphql-request';
import { rolesApi } from '../../rolesApi';
import { extractGraphqlResponse } from '@/api';

export type RoleFetchPermissionsRequest = void;
export type RoleFetchPermissionsResponse = Array<contracts.Permission>;

export const roleFetchPermissionsEndpoint = rolesApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchPermissions: builder.query<
    RoleFetchPermissionsResponse,
    RoleFetchPermissionsRequest
    >({
      query: () => ({
        document: gql`
            query permissions {
                permissions {
                    id
                    namespace
                    slug
                }
            }
        `,
      }),
      transformResponse: extractGraphqlResponse('permissions'),
    }),
  }),
  overrideExisting: true,
});
