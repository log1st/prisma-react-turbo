import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { authApi, AuthTag } from '../../authApi';
import { extractGraphqlResponse } from '../../../../utils';

export type FetchMeAuthEndpointRequest = void;
export type FetchMeAuthEndpointResponse = contracts.AuthUserType;

export const authMeEndpoint = authApi.injectEndpoints({
  endpoints: (builder) => ({
    fetchMe: builder.query<
    FetchMeAuthEndpointResponse,
    FetchMeAuthEndpointRequest
    >({
      query: (variables) => ({
        document: gql`
            query {
                me {
                    id
                    login
                    roleId
                    role {
                        permissionsOnRoles {
                            permission {
                                namespace
                                slug
                            }
                        }
                    }
                }
            }
        `,
        variables,
      }),
      transformResponse: extractGraphqlResponse('me'),
      providesTags: [
        AuthTag.data,
      ],
    }),
  }),
  overrideExisting: true,
});
