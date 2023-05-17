import {
  Menu,
} from 'antd';
import { useTranslation } from 'react-i18next';
import { contracts } from '@oapis/contracts';
import { getAdminRoute } from '@/router';
import { usePermission } from '@/containers';
import { useMenu } from '@/hooks';

export function MainHeader() {
  const { t } = useTranslation();

  const hasAdminPermission = usePermission(contracts.adminPermission);

  const { items, selectedKeys } = useMenu(t, [
    hasAdminPermission && {
      key: 'admin',
      label: t('admin:title'),
      to: getAdminRoute(),
    },
  ]);

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      items={items}
      selectable={false}
      selectedKeys={selectedKeys}
      disabledOverflow
    />
  );
}
