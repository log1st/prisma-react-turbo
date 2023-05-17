import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const configAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'config',
};
