import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import {
  ApiOutlined,
  DashboardOutlined,
  LockOutlined, SlidersOutlined,
  TransactionOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import { contracts } from '@oapis/contracts';
import {
  getAdminConfigRoute,
  getAdminEndpointsRoute, getAdminRolesRoute,
  getAdminRoute,
  getAdminTransactionsRoute,
  getAdminUsersRoute,
  getAdminWalletsRoute,
} from '@/router';
import { useMenu } from '@/hooks';
import { useCheckPermission } from '@/containers';

export function AdminSidebar() {
  const { t } = useTranslation('admin');

  const { hasPermission } = useCheckPermission();

  const { items, selectedKeys } = useMenu(t, [
    hasPermission(contracts.dashboardAdminPermission) && {
      key: 'dashboard',
      to: getAdminRoute(),
      label: t('dashboard.title'),
      exact: true,
      icon: (
        <DashboardOutlined />
      ),
    },
    hasPermission(contracts.configAdminPermission) && {
      key: 'config',
      to: getAdminConfigRoute(),
      label: t('config.title'),
      icon: (
        <SlidersOutlined />
      ),
    },
    hasPermission(contracts.rolesAdminPermission) && {
      key: 'role',
      to: getAdminRolesRoute(),
      label: t('role.title'),
      icon: (
        <LockOutlined />
      ),
    },
    hasPermission(contracts.usersAdminPermission) && {
      key: 'user',
      to: getAdminUsersRoute(),
      label: t('user.title'),
      icon: (
        <UserOutlined />
      ),
    },
    hasPermission(contracts.endpointsAdminPermission) && {
      key: 'endpoint',
      to: getAdminEndpointsRoute(),
      label: t('endpoint.title'),
      icon: (
        <ApiOutlined />
      ),
    },
    hasPermission(contracts.transactionsAdminPermission) && {
      key: 'transaction',
      to: getAdminTransactionsRoute(),
      label: t('transaction.title'),
      icon: (
        <TransactionOutlined />
      ),
    },
    hasPermission(contracts.walletsAdminPermission) && {
      key: 'wallet',
      to: getAdminWalletsRoute(),
      label: t('wallet.title'),
      icon: (
        <WalletOutlined />
      ),
    },
  ]);

  return (
    <Menu
      items={items}
      selectedKeys={selectedKeys}
      selectable={false}
    />
  );
}
