import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { authApi, authMeEndpoint, extractGraphqlResponse } from '@/api';

export type AuthSignInRequest = contracts.AuthSignInDto;

export type AuthSignInResponse = contracts.AuthDataType;

export const authSignInEndpoint = authApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<
    AuthSignInResponse,
    AuthSignInRequest
    >({
      query: (payload) => ({
        document: gql`
          mutation signIn($payload: AuthSignInDto!) {
            signIn(payload: $payload) {
              accessToken {
                token
                type
                expiresAt
              }
              refreshToken {
                  token
                  type
                  expiresAt
              }
              data {
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
          }
        `,
        variables: {
          payload,
        },
      }),
      transformResponse: extractGraphqlResponse('signIn'),
      async onCacheEntryAdded(payload, { cacheDataLoaded, dispatch }) {
        const response = await cacheDataLoaded;
        dispatch(
          authMeEndpoint.util.upsertQueryData('fetchMe', undefined, response.data.data),
        );
      },
    }),
  }),
});
