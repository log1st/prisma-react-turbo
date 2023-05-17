import {
  createContext, PropsWithChildren, useCallback, useMemo, useState,
} from 'react';
import { v4 } from 'uuid';
import {
  UpdateRoleDialogProps,
  ConfirmDialogProps,
  UpdateUserDialogProps,
} from '@/containers';

export enum ModalType {
  signIn = 'signIn',
  signUp = 'signUp',
  updateRole = 'updateRole',
  createRole = 'createRole',
  updateUser = 'updateUser',
  createUser = 'createUser',
  confirm = 'confirm',
}

export type ModalConfigByType = {
  [ModalType.updateRole]: Omit<UpdateRoleDialogProps, 'onClose'>;
  [ModalType.confirm]: Omit<ConfirmDialogProps, 'onClose'>;
  [ModalType.updateUser]: Omit<UpdateUserDialogProps, 'onClose'>;
};

export type ModalConfig<Type extends ModalType> = {
  type: Type;
  permanent?: boolean;
} & (
  Type extends keyof ModalConfigByType ? {
    params: ModalConfigByType[Type]
  } : {}
);

export type RegisteredModalConfig<Type extends ModalType> = ModalConfig<Type> & {
  id: string;
};

export type ModalsContextValue = {
  modals: Array<RegisteredModalConfig<any>>;
  showModal<Type extends ModalType>(config: ModalConfig<Type>): () => void;
  hideModalById(id: RegisteredModalConfig<any>['id']): void;
};

export const ModalsContext = createContext<ModalsContextValue>({
  modals: [],
  showModal: () => () => {},
  hideModalById: () => {},
});

export function ModalsProvider({
  children,
}: PropsWithChildren) {
  const [
    modals,
    setModals,
  ] = useState<Array<RegisteredModalConfig<any>>>([]);

  const hideModalById = useCallback((id: RegisteredModalConfig<any>['id']) => {
    setModals((oldModals) => {
      const newModals = [...oldModals];
      const index = newModals.findIndex((modal) => modal.id === id);
      if (index > -1) {
        newModals.splice(index, 1);
      }
      return newModals;
    });
  }, [setModals]);

  const showModal = useCallback(<Type extends ModalType>(config: ModalConfig<Type>) => {
    const id = v4();

    setModals((oldModals) => ([
      ...oldModals,
      {
        ...config,
        id,
      },
    ]));

    return () => {
      hideModalById(id);
    };
  }, [setModals, hideModalById]);

  const value = useMemo(() => ({
    modals,
    showModal,
    hideModalById,
  }), [modals, showModal, hideModalById]);

  return (
    <ModalsContext.Provider value={value}>
      {children}
    </ModalsContext.Provider>
  );
}
