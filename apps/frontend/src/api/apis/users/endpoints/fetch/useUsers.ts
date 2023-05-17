import {
  usersFetchEndpoint,
  UsersFetchRequest,
} from './usersFetchEndpoint';

export const useUsers = (
  request: UsersFetchRequest,
) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = usersFetchEndpoint.endpoints.fetch.useQuery(request);

  return {
    error,
    data,
    isLoading,
    isFetching,
  };
};
