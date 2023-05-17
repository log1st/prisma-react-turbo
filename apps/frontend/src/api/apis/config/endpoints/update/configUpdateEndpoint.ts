import { gql } from 'graphql-request';
import { contracts } from '@oapis/contracts';
import { configApi, ConfigsTag } from '../../configApi';
import { extractGraphqlResponse } from '@/api';

export type ConfigUpdateRequest = contracts.ConfigUpdateDto;

export type ConfigUpdateResponse = contracts.Config;

export const configUpdateEndpoint = configApi.injectEndpoints({
  endpoints: (build) => ({
    update: build.mutation<
    ConfigUpdateResponse,
    ConfigUpdateRequest
    >({
      query: (input) => ({
        document: gql`
            mutation updateConfig($input: ConfigUpdateDto!) {
                updateConfig(input: $input) {
                  id
                  initialRoleId
                }
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('updateConfig'),
      invalidatesTags: (result) => (result ? [
        {
          type: ConfigsTag.list,
          id: 'LIST',
        },
        {
          type: ConfigsTag.list,
          id: result.id,
        },
      ] : []),
    }),
  }),
  overrideExisting: true,
});
