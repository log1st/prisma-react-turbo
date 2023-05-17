import { authSignInEndpoint } from '@/api';

export const useAuthSignIn = () => {
  const [signIn, {
    isLoading: isSigningIn,
  }] = authSignInEndpoint.endpoints.signIn.useMutation();

  return {
    signIn,
    isSigningIn,
  };
};
