import { TFunction } from 'i18next';
import { PropsWithChildren, ReactNode } from 'react';
import { Trans } from 'react-i18next';
import { Typography } from 'antd';

type Props = PropsWithChildren<{
  t: TFunction;
  i18nKey: string;
  values?: Record<string, any>;
  components?: Record<string, ReactNode>;
}>;

export function UiTrans({
  t,
  values,
  components,
  i18nKey,
  children,
}: Props) {
  return (
    <Trans
      t={t}
      i18nKey={i18nKey}
      values={values}
      components={{
        ...components,
        b: <b />,
        i: <i />,
        code: <Typography.Text code />,
      }}
    >
      {children}
    </Trans>
  );
}
