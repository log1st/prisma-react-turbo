import {
  configFetchEndpoint,
  ConfigFetchRequest,
  ConfigFetchResponse,
} from './configFetchEndpoint';

export const useConfig = (
  request: ConfigFetchRequest,
) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = configFetchEndpoint.endpoints.fetch.useQuery(request);

  return {
    error,
    data,
    isLoading,
    isFetching,
  };
};

export const useConfigFetch = () => {
  const [fetch, {
    isLoading: isfetchPascalCase,
  }] = configFetchEndpoint.endpoints.fetch.useMutation();

  return {
    fetch,
    isfetchPascalCase,
  };
};
