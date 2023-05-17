import { contracts } from '@oapis/contracts';
import { useTranslation } from 'react-i18next';

export const usePermissionName = () => {
  const { t } = useTranslation('permission');

  const permissionName = ({ namespace, slug }: contracts.Permission) => (
    t(`${namespace}.permission.${slug}`)
  );

  const permissionNamespaceName = (namespace: string) => (
    t(`${namespace}.title`)
  );

  return {
    permissionName,
    permissionNamespaceName,
  };
};
