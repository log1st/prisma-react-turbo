import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const walletsAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'wallets',
};
