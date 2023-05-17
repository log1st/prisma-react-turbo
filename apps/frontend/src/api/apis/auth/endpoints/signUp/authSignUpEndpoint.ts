import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { authApi, authMeEndpoint, extractGraphqlResponse } from '@/api';

export type AuthSignUpRequest = contracts.AuthSignUpDto;

export type AuthSignUpResponse = contracts.AuthDataType;

export const authSignUpEndpoint = authApi.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<
    AuthSignUpResponse,
    AuthSignUpRequest
    >({
      query: (payload) => ({
        document: gql`
          mutation signUp($payload: AuthSignUpDto!) {
            signUp(payload: $payload) {
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
      transformResponse: extractGraphqlResponse('signUp'),
      async onCacheEntryAdded(payload, { cacheDataLoaded, dispatch }) {
        const response = await cacheDataLoaded;
        dispatch(
          authMeEndpoint.util.upsertQueryData('fetchMe', undefined, response.data.data),
        );
      },
    }),
  }),
});
