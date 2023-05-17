import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { UiAppLayout } from '@/ui';
import { Modals, LanguageSelector, Toasts } from '@/containers';

export function App({
  children,
}: PropsWithChildren) {
  const { i18n } = useTranslation();

  return (
    <UiAppLayout
      locale={i18n.language}
      modals={(
        <Modals />
      )}
      toasts={(
        <Toasts />
      )}
      controls={(
        <LanguageSelector />
      )}
    >
      {children}
    </UiAppLayout>
  );
}
