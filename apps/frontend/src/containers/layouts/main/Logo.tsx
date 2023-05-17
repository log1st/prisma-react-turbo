import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getIndexRoute } from '@/router';

const Title = styled(Typography.Title)`
  margin-bottom: 0 !important;
  color: white !important;
`;

export function Logo() {
  const { t } = useTranslation('meta');

  return (
    <Link to={getIndexRoute()}>
      <Title level={2}>
        {t('title')}
      </Title>
    </Link>
  );
}
