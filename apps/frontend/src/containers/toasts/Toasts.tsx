import { useCallback } from 'react';
import { RegisteredToastConfig, useToasts } from '@/providers';
import { Toast } from '@/containers';

export function Toasts() {
  const {
    toasts,
    hideToastById,
  } = useToasts();

  const handleClose = useCallback((modal: RegisteredToastConfig) => () => {
    hideToastById(modal.id);
  }, [hideToastById]);

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          config={toast}
          onClose={handleClose(toast)}
        />
      ))}
    </>
  );
}
