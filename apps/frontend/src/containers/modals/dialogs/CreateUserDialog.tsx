import { useTranslation } from 'react-i18next';
import { useUserCreate } from '@/api';
import { UserForm } from '@/containers';

export type CreateUserDialogProps = {
  onClose?(): void;
};

export function CreateUserDialog({
  onClose,
}: CreateUserDialogProps) {
  const { t } = useTranslation('admin', {
    keyPrefix: 'user.action.create',
  });

  const {
    createUser,
  } = useUserCreate();

  return (
    <UserForm
      mutate={createUser}
      onSuccess={onClose}
      title={t('title')}
    />
  );
}
