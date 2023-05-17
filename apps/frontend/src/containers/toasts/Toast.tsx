import { Alert } from 'antd';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { RegisteredToastConfig } from '@/providers';

type Props = {
  config: RegisteredToastConfig;
  onClose?(): void;
};

export function Toast({
  config,
  onClose,
}: Props) {
  const { t } = useTranslation(config.namespace, {
    keyPrefix: config.keyPrefix,
  });

  useEffect(() => {
    if (!config.duration) {
      return () => {};
    }

    const timeout = setTimeout(() => {
      onClose?.();
    }, config.duration);

    return () => {
      clearTimeout(timeout);
    };
  }, [config.duration]);

  return (
    <Alert
      type={config.type}
      closable={config.closeable}
      message={config.title && t('title', config.params)}
      description={config.message && t('message', config.params)}
      showIcon={config.showIcon}
      afterClose={onClose}
    />
  );
}
