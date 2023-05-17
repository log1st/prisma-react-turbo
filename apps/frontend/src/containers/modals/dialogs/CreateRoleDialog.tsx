import { useTranslation } from 'react-i18next';
import { useRoleCreate } from '@/api';
import { RoleForm } from '@/containers';

export type CreateRoleDialogProps = {
  onClose?(): void;
};

export function CreateRoleDialog({
  onClose,
}: CreateRoleDialogProps) {
  const { t } = useTranslation('admin', {
    keyPrefix: 'role.action.create',
  });

  const {
    createRole,
  } = useRoleCreate();

  return (
    <RoleForm
      mutate={createRole}
      onSuccess={onClose}
      title={t('title')}
    />
  );
}
