import {
  usersFetchOneEndpoint,
  UsersFetchOneRequest,
} from './usersFetchOneEndpoint';

export const useUser = (
  request: UsersFetchOneRequest,
) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = usersFetchOneEndpoint.endpoints.fetchOne.useQuery(request);

  return {
    error,
    data,
    isLoading,
    isFetching,
  };
};
