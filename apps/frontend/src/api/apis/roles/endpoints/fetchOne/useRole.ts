import { rolesFetchOneEndpoint, RolesFetchOneRequest } from '@/api';

export const useRole = (
  request: RolesFetchOneRequest,
) => {
  const {
    data,
    isLoading,
    isFetching,
  } = rolesFetchOneEndpoint.endpoints.fetchOne.useQuery(request);

  return {
    data,
    isLoading,
    isFetching,
  };
};
