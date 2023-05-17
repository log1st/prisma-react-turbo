import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useAuthMe, useAuthSignOut } from '@/api';
import { useMenu } from '@/hooks';
import { getProfileRoute } from '@/router';

export function MainUserHeader() {
  const { t } = useTranslation('auth', {
    keyPrefix: 'signOut',
  });

  const { signOut } = useAuthSignOut();
  const { data } = useAuthMe();

  const { items, selectedKeys } = useMenu(t, [
    data && {
      key: 'me',
      label: t('signedInAs', data),
      to: getProfileRoute(),
      exact: true,
    },
    {
      key: 'signOut',
      label: t('action'),
      onClick: signOut,
      danger: true,
    },
  ]);

  return (
    <Menu
      mode="horizontal"
      theme="dark"
      items={items}
      selectedKeys={selectedKeys}
      selectable={false}
      disabledOverflow
    />
  );
}
