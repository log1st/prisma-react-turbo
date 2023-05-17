import {
  roleFetchPermissionsEndpoint,
  RoleFetchPermissionsRequest,
} from './roleFetchPermissionsEndpoint';

export const usePermissions = (
  request: RoleFetchPermissionsRequest,
) => {
  const {
    data,
    isLoading,
    isFetching,
  } = roleFetchPermissionsEndpoint.endpoints.fetchPermissions.useQuery(request);

  return {
    data,
    isLoading,
    isFetching,
  };
};
