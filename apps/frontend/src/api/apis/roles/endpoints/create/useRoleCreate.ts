import { roleCreateEndpoint } from '@/api';

export const useRoleCreate = () => {
  const [createRole, {
    isLoading: isCreatingRole,
  }] = roleCreateEndpoint.endpoints.create.useMutation();

  return {
    createRole,
    isCreatingRole,
  };
};
