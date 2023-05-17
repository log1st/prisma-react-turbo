import { contracts } from '@oapis/contracts';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { useRole, useRoleUpdate } from '@/api';
import { RoleForm } from '@/containers';
import { UiTrans } from '@/ui';

export type UpdateRoleDialogProps = {
  roleId: contracts.Role['id'];
  onClose?(): void;
};

export function UpdateRoleDialog({
  roleId,
  onClose,
}: UpdateRoleDialogProps) {
  const { t } = useTranslation('admin', {
    keyPrefix: 'role.action.update',
  });

  const {
    data,
    isLoading,
  } = useRole(roleId);

  const {
    updateRole,
  } = useRoleUpdate();

  const mutate = useCallback((input: Omit<contracts.RoleUpdateDto, 'id'>) => updateRole({
    ...input,
    id: data.id,
  }), [data?.id, updateRole]);

  const initialValues = useMemo(() => ({
    slug: data?.slug,
    permissions: data?.permissionsOnRoles?.map((i) => i.permissionId) || [],
  }), [data?.slug, data?.permissionsOnRoles]);

  if (isLoading) {
    return (
      <RoleForm.Loader tip={t('loading')} />
    );
  }

  return (
    <RoleForm
      mutate={mutate}
      initialValues={initialValues}
      onSuccess={onClose}
      title={(
        <UiTrans
          t={t}
          i18nKey="title"
          values={data}
        />
      )}
    />
  );
}
