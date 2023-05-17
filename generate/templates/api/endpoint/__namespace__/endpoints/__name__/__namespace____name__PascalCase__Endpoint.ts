import { gql } from 'graphql-request';
import { __namespace__CamelCase__Api } from '../../__namespace__CamelCase__Api';
import { extractGraphqlResponse } from '@/api';

export type __namespace__PascalCase____name__PascalCase__Request = any;

export type __namespace__PascalCase____name__PascalCase__Response = any;

export const __namespace____name__PascalCase__Endpoint = __namespace__CamelCase__Api.injectEndpoints({
  endpoints: (build) => ({
    __name__CamelCase__: build.__type__<
    __namespace__PascalCase____name__PascalCase__Response,
    __namespace__PascalCase____name__PascalCase__Request
    >({
      query: (input) => ({
        document: gql`
            __type__ __name__ {
                
            }
        `,
        variables: {
          input,
        },
      }),
      transformResponse: extractGraphqlResponse('__name__'),
    }),
  }),
  overrideExisting: true,
});
