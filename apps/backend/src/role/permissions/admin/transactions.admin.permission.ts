import { PermissionConfig, PermissionNamespace } from '../abstract.permission';

export const transactionsAdminPermission: PermissionConfig = {
  namespace: PermissionNamespace.admin,
  slug: 'transactions',
};
