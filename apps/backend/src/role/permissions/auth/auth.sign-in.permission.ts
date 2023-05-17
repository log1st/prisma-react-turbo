import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const authSignInPermission: PermissionConfig = {
  namespace: PermissionNamespace.auth,
  slug: 'sign-in',
};
