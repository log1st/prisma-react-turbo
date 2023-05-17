import { useSelector } from 'react-redux';
import { authMeEndpoint, FetchMeAuthEndpointRequest } from './authMeEndpoint';
import { isAuthorizedSelector } from '@/store/slices';

export const useAuthMe = (
  request: FetchMeAuthEndpointRequest,
) => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  const {
    data,
    isLoading,
    isFetching,
  } = authMeEndpoint.endpoints.fetchMe.useQuery(request, {
    skip: !isAuthorized,
  });

  return {
    data,
    isLoading,
    isFetching,
  };
};
