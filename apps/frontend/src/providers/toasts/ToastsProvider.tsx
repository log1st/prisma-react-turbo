import { AlertProps } from 'antd';
import {
  createContext, PropsWithChildren, useCallback, useMemo, useState,
} from 'react';
import { v4 } from 'uuid';

export type ToastConfig = {
  showIcon?: boolean;
  type?: AlertProps['type'];
  namespace?: string;
  keyPrefix?: string;
  duration?: number;
  title?: boolean;
  message?: boolean;
  params?: Record<any, any>;
  closeable?: boolean;
};

export type RegisteredToastConfig = ToastConfig & {
  id: string;
};

export type ToastsContextValue = {
  toasts: Array<RegisteredToastConfig>;
  showToast(config: ToastConfig): () => void;
  hideToastById(id: RegisteredToastConfig['id']): void;
};

export const ToastsContext = createContext<ToastsContextValue>({
  toasts: [],
  showToast: () => () => {},
  hideToastById: () => {},
});

export function ToastsProvider({
  children,
}: PropsWithChildren) {
  const [
    toasts,
    setToasts,
  ] = useState<Array<RegisteredToastConfig>>([]);

  const hideToastById = useCallback((id: RegisteredToastConfig['id']) => {
    setToasts((oldToasts) => {
      const newToasts = [...oldToasts];
      const index = newToasts.findIndex((toast) => toast.id === id);
      if (index > -1) {
        newToasts.splice(index, 1);
      }
      return newToasts;
    });
  }, [setToasts]);

  const showToast = useCallback(({
    title = true,
    closeable = true,
    duration = 3000,
    showIcon = true,
    ...config
  }: ToastConfig) => {
    const id = v4();

    setToasts((oldToasts) => ([
      ...oldToasts,
      {
        ...config,
        title,
        closeable,
        duration,
        showIcon,
        id,
      },
    ]));

    return () => {
      hideToastById(id);
    };
  }, [setToasts, hideToastById]);

  const value = useMemo(() => ({
    toasts,
    showToast,
    hideToastById,
  }), [toasts, showToast, hideToastById]);

  return (
    <ToastsContext.Provider value={value}>
      {children}
    </ToastsContext.Provider>
  );
}
