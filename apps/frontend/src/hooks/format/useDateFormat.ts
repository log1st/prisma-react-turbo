import { useTranslation } from 'react-i18next';

type Type = 'full' | 'short';

export const useDateFormat = () => {
  const { t } = useTranslation('formatters', {
    keyPrefix: 'date',
  });

  return (date: Date | string, type: Type = 'full') => t(type, { value: new Date(date) });
};
