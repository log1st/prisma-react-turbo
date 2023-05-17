import { useCallback } from 'react';
import { ModalType, useModals } from '@/providers';
import { ConfirmDialogProps } from '@/containers';

export const useConfirm = () => {
  const { showModal } = useModals();

  const showConfirm = useCallback((
    params: Omit<ConfirmDialogProps, 'onClose'>,
  ) => {
    showModal({
      type: ModalType.confirm,
      params,
    });
  }, [showModal]);

  const confirm = useCallback(async (
    params: Omit<ConfirmDialogProps, 'onClose' | 'onConfirm' | 'onCancel'>,
  ) => new Promise((resolve) => {
    showConfirm({
      ...params,
      onConfirm() {
        resolve(true);
      },
      onCancel() {
        resolve(false);
      },
    });
  }), [showModal]);

  return {
    showConfirm,
    confirm,
  };
};
