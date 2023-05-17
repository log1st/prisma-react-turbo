import { authSignOutEndpoint } from './authSignOutEndpoint';

export const useAuthSignOut = () => {
  const [signOut, {
    isLoading: isSigningOut,
  }] = authSignOutEndpoint.endpoints.signOut.useMutation();

  return {
    signOut,
    isSigningOut,
  };
};
