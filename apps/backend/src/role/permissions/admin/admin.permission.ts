import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const adminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'admin',
};
