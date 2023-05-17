import { rolesDeleteEndpoint } from './rolesDeleteEndpoint';

export const useRolesDelete = () => {
  const [deleteRoles, {
    isLoading: isDeletingRoles,
  }] = rolesDeleteEndpoint.endpoints.delete.useMutation();

  return {
    deleteRoles,
    isDeletingRoles,
  };
};
