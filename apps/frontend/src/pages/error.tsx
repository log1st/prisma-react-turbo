import { Link, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { UiCenterLayout, UiErrorLayout } from '@/ui';
import { getIndexRoute } from '@/router';

export function ErrorPage() {
  const error = useRouteError() as {
    status: number;
    data?: string;
  };

  const { t } = useTranslation('error', {
    keyPrefix: String(error.status),
  });

  return (
    <UiCenterLayout>
      <UiErrorLayout
        title={t('title')}
        meta={error?.data}
        action={(
          <Link to={getIndexRoute()}>
            <Button type="primary">{t('action')}</Button>
          </Link>
        )}
      />
    </UiCenterLayout>
  );
}
