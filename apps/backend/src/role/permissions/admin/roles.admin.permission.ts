import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const rolesAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'roles',
};
