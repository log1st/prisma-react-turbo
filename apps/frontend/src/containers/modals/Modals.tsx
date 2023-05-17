import { useCallback } from 'react';
import { RegisteredModalConfig, useModals } from '@/providers';
import { Modal } from './Modal';

export function Modals() {
  const {
    modals,
    hideModalById,
  } = useModals();

  const handleClose = useCallback((modal: RegisteredModalConfig<any>) => () => {
    if (modal.permanent) {
      return;
    }
    hideModalById(modal.id);
  }, [hideModalById]);

  return (
    <>
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          config={modal}
          onClose={handleClose(modal)}
        />
      ))}
    </>
  );
}
