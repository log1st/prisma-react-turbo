import { roleUpdateEndpoint } from '@/api';

export const useRoleUpdate = () => {
  const [updateRole, {
    isLoading: isUpdatingRole,
  }] = roleUpdateEndpoint.endpoints.update.useMutation();

  return {
    updateRole,
    isUpdatingRole,
  };
};
