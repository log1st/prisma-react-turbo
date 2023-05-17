import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const endpointsAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'endpoints',
};
