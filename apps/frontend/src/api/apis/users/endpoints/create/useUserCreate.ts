import {
  usersCreateEndpoint,
} from './usersCreateEndpoint';

export const useUserCreate = () => {
  const [createUser, {
    isLoading: isCreatingUser,
  }] = usersCreateEndpoint.endpoints.create.useMutation();

  return {
    createUser,
    isCreatingUser,
  };
};
