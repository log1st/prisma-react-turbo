import { rolesFetchEndpoint, RolesFetchRequest } from '@/api';

export const useRoles = (
  request: RolesFetchRequest,
) => {
  const {
    data,
    error,
    isLoading,
    isFetching,
  } = rolesFetchEndpoint.endpoints.fetch.useQuery(request);

  return {
    error,
    data,
    isLoading,
    isFetching,
  };
};
