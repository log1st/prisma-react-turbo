import { authSignUpEndpoint } from '@/api';

export const useAuthSignUp = () => {
  const [signUp, {
    isLoading: isSignUpgIn,
  }] = authSignUpEndpoint.endpoints.signUp.useMutation();

  return {
    signUp,
    isSignUpgIn,
  };
};
