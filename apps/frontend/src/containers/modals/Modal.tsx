import { Modal as BaseModal } from 'antd';
import { useCallback } from 'react';
import { useToggle } from 'usehooks-ts';
import { ModalType, RegisteredModalConfig } from '@/providers';
import {
  AuthSignInDialog, AuthSignUpDialog,
  ConfirmDialog, CreateRoleDialog,
  UpdateRoleDialog, CreateUserDialog,
  UpdateUserDialog,
} from '@/containers';

type ModalProps<Type extends ModalType> = {
  config: RegisteredModalConfig<Type>;
  onClose?(): void;
};

export function Modal({
  config,
  onClose,
}: ModalProps<any>) {
  const [open, toggle] = useToggle(true);

  const handleClose = useCallback(() => {
    if (config.permanent) {
      return;
    }
    onClose?.();
  }, [onClose, config.permanent]);

  const Render = {
    [ModalType.signIn]: AuthSignInDialog,
    [ModalType.signUp]: AuthSignUpDialog,
    [ModalType.updateRole]: UpdateRoleDialog,
    [ModalType.createRole]: CreateRoleDialog,
    [ModalType.updateUser]: UpdateUserDialog,
    [ModalType.createUser]: CreateUserDialog,
    [ModalType.confirm]: ConfirmDialog,
  }[config.type];

  return (
    <BaseModal
      title={!config.permanent}
      open={open}
      onCancel={!config.permanent ? toggle : undefined}
      footer={null}
      closable={!config.permanent}
      centered
      style={{
        padding: '20px',
      }}
      afterClose={handleClose}
    >
      {Render && (
        <Render
          {...(config as any).params}
          onClose={toggle}
        />
      )}
    </BaseModal>
  );
}
