import { contracts } from '@oapis/contracts';
import { PropsWithChildren } from 'react';
import { Navigate, Path } from 'react-router-dom';
import { arrayFrom } from '@oapis/common';
import { useAuthMe } from '@/api';
import { getIndexRoute } from '@/router';

type Props = PropsWithChildren<{
  permission: contracts.PermissionConfig | Array<contracts.PermissionConfig>;
  to?: Partial<Path>;
}>;

export const checkPermissions = (
  data?: contracts.AuthUserType,
  ...permissions: Array<contracts.PermissionConfig>
) => (
  !!data && permissions.every(
    ({ slug, namespace }) => data.role?.permissionsOnRoles.some((pOR) => (
      pOR.permission.namespace === namespace
      && pOR.permission.slug === slug
    )),
  )
);

export const useCheckPermission = () => {
  const { data } = useAuthMe();

  const hasPermission = (
    ...permissions: Array<contracts.PermissionConfig>
  ) => checkPermissions(data, ...permissions);

  return {
    hasPermission,
  };
};

export const usePermission = (
  ...permissions: Array<contracts.PermissionConfig>
) => {
  const { data, isLoading } = useAuthMe();
  if (isLoading) {
    return null;
  }

  return checkPermissions(data, ...permissions);
};

export function PermissionGuard({
  permission,
  to = getIndexRoute(),
  children,
}: Props) {
  const hasPermission = usePermission(...arrayFrom(permission));
  if (hasPermission === false) {
    return (
      <Navigate to={to} />
    );
  }

  return (
    <>{children}</>
  );
}
