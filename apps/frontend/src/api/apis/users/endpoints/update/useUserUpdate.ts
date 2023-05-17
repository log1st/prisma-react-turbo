import {
  usersUpdateEndpoint,
} from './usersUpdateEndpoint';

export const useUserUpdate = () => {
  const [updateUser, {
    isLoading: isUpdatingUser,
  }] = usersUpdateEndpoint.endpoints.update.useMutation();

  return {
    updateUser,
    isUpdatingUser,
  };
};
