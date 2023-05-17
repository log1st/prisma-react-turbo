import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';

export function LanguageSelector() {
  const { t, i18n } = useTranslation('meta');

  const options = useMemo<Array<{
    value: string;
    label: string;
  }>>(() => (
    i18n.options.supportedLngs ? (
      i18n.options.supportedLngs.filter((lng) => (
        lng !== 'cimode'
      )).map((value) => ({
        value,
        label: t('language', {
          lng: value,
        }),
      }))
    ) : []
  ), [t, i18n.options.supportedLngs]);

  const onChange = useCallback((value: string) => {
    i18n.changeLanguage(value);
  }, [i18n]);

  return (
    <Select
      value={i18n.language}
      options={options}
      onChange={onChange}
    />
  );
}
