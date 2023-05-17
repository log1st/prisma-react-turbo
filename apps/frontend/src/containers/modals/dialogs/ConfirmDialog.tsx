import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';
import { Button } from 'antd';
import {
  CSSProperties, FC, useCallback,
} from 'react';
import { UiConfirmContainer, UiTrans } from '@/ui';

export type ConfirmDialogProps = {
  namespace?: string;
  keyPrefix?: string;
  title?: boolean;
  message?: boolean;
  params?: Record<any, any>;
  danger?: boolean;
  icon?: FC<{
    twoToneColor?: [string, string] | string;
    style?: Pick<CSSProperties, 'fontSize'>
  }>

  onClose?(): void;
  onConfirm?(): void;
  onCancel?(): void;
};

type TextProps = {
  t: TFunction;
  type: string;
  params?: Record<any, any>
};

function Text({ t, type, params }: TextProps) {
  return (
    <UiTrans
      t={t}
      i18nKey={type}
      values={params}
    />
  );
}

export function ConfirmDialog({
  onClose,
  namespace,
  keyPrefix,
  title,
  message,
  params,
  onConfirm,
  onCancel,
  danger,
  icon: Icon,
}: ConfirmDialogProps) {
  const { t } = useTranslation(namespace, {
    keyPrefix,
  });

  const handleCallback = useCallback((cb?: (() => void)) => () => {
    cb?.();
    onClose?.();
  }, [onClose]);

  return (
    <UiConfirmContainer
      icon={Icon && (
        <Icon
          twoToneColor="red"
          style={{
            fontSize: '26px',
          }}
        />
      )}
      title={title && (
        <Text t={t} type="title" params={params} />
      )}
      message={message && (
        <Text t={t} type="message" params={params} />
      )}
      actions={(
        <>
          <Button
            type="default"
            onClick={handleCallback(onCancel)}
          >
            {t('cancel')}
          </Button>
          <Button
            danger={danger}
            type="primary"
            onClick={handleCallback(onConfirm)}
          >
            {t('confirm')}
          </Button>
        </>
      )}
    />
  );
}
