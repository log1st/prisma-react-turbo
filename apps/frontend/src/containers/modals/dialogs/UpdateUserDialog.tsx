import { contracts } from '@oapis/contracts';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import {
  useUser, useUserUpdate,
} from '@/api';
import { UserForm } from '@/containers';
import { UiTrans } from '@/ui';

export type UpdateUserDialogProps = {
  userId: contracts.User['id'];
  onClose?(): void;
};

export function UpdateUserDialog({
  userId,
  onClose,
}: UpdateUserDialogProps) {
  const { t } = useTranslation('admin', {
    keyPrefix: 'user.action.update',
  });

  const {
    data,
    isLoading,
  } = useUser(userId);

  const {
    updateUser,
  } = useUserUpdate();

  const mutate = useCallback((input: Omit<contracts.UserUpdateDto, 'id'>) => updateUser({
    ...input,
    id: data.id,
  }), [data?.id, updateUser]);

  if (isLoading) {
    return (
      <UserForm.Loader tip={t('loading')} />
    );
  }

  return (
    <UserForm
      mutate={mutate}
      initialValues={data}
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
