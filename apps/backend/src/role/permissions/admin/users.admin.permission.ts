import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const usersAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'users',
};
