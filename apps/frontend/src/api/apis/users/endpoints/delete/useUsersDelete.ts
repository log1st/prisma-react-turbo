import {
  usersDeleteEndpoint,
} from './usersDeleteEndpoint';

export const useUsersDelete = () => {
  const [deleteUsers, {
    isLoading: isDeletingUsers,
  }] = usersDeleteEndpoint.endpoints.delete.useMutation();

  return {
    deleteUsers,
    isDeletingUsers,
  };
};
