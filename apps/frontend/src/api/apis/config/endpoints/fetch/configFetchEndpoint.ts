import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { configApi, ConfigsTag } from '../../configApi';
import { extractGraphqlResponse } from '@/api';

export type ConfigFetchRequest = void;

export type ConfigFetchResponse = contracts.Config;

export const configFetchEndpoint = configApi.injectEndpoints({
  endpoints: (build) => ({
    fetch: build.query<
    ConfigFetchResponse,
    ConfigFetchRequest
    >({
      query: () => ({
        document: gql`
            query config {
                config {
                  id
                  initialRoleId
                }
            }
        `,
      }),
      transformResponse: extractGraphqlResponse('config'),
      providesTags: (result) => (result ? [
        {
          type: ConfigsTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
