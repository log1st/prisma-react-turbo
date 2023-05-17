import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const dashboardAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'dashboard',
};
