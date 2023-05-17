import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { baseApiURL } from '@/shared/env';
import { accessTokenSelector } from '@/store/slices';

export type RequestError = {
  status: number;
  message: string | null;
  errors: Record<string, Array<{
    type: string;
    property: string;
    constraints?: any[];
  }>>
};

export const baseQuery = graphqlRequestBaseQuery({
  url: baseApiURL,
  prepareHeaders: (headers, api) => {
    const data = accessTokenSelector(api.getState() as any);

    if (data) {
      headers.set('authorization', `${data.type} ${data.token}`);
    }

    return headers;
  },
  customErrors(args) {
    const [{ extensions }] = args.response.errors;

    const requestError: RequestError = {
      status: 400,
      message: null,
      errors: {},
    };

    if ('originalError' in extensions) {
      requestError.status = extensions.originalError.statusCode;

      if ('message' in extensions.originalError && Array.isArray(extensions.originalError.message)) {
        extensions.originalError.message.forEach((error) => {
          try {
            const errorData = JSON.parse(error);
            if ('property' in errorData) {
              if (!(errorData.property in requestError.errors)) {
                requestError.errors[errorData.property] = [];
              }
              requestError.errors[errorData.property].push(errorData);
            }
          } catch { /* empty */ }
        });
      }

      if (Object.keys(requestError.errors).length === 0) {
        requestError.message = extensions.originalError.message;
      }
    }

    return requestError;
  },
});
