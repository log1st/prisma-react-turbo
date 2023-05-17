import 'antd/dist/reset.css';
import styled from 'styled-components';
import {
  PropsWithChildren, ReactNode, useEffect, useMemo,
} from 'react';
import { App, ConfigProvider } from 'antd';
import { useEventListener } from 'usehooks-ts';

import ru from 'antd/locale/ru_RU';
import en from 'antd/locale/en_US';

const Wrapper = styled(App)`
  display: flex;
  flex-direction: column;

  min-height: calc(var(--vh, 1vh) * 100);
`;

const Modals = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: 1;
  
  > * {
    pointer-events: initial;
    visibility: initial;
  }
`;

const Controls = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  
  display: flex;
  align-items: center;
  gap: 10px;

  z-index: 1001;
`;

const Toasts = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  visibility: hidden;
  z-index: 1002;
  
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  
  gap: 20px;
  padding: 20px;
  
  > * {
    pointer-events: initial;
    visibility: initial;
  }
`;

const handleVh = () => {
  document.documentElement.style.setProperty(
    '--vh',
    `${(window.visualViewport?.height || window.innerHeight) / 100}px`,
  );
};

export type UIAppLayoutProps = {
  modals?: ReactNode;
  toasts?: ReactNode;
  controls?: ReactNode;
  locale?: string;
};

export function UiAppLayout({
  children,
  modals,
  controls,
  toasts,
  locale,
}: PropsWithChildren<UIAppLayoutProps>) {
  useEventListener('resize', handleVh);
  useEventListener('orientationchange', handleVh);
  useEffect(handleVh, []);

  const antdLocale = useMemo(() => ({
    ru,
    en,
  }[locale]), [locale]);

  return (
    <ConfigProvider locale={antdLocale}>
      <Wrapper>
        {children}
        {modals && (
          <Modals>{modals}</Modals>
        )}
        {controls && (
          <Controls>{controls}</Controls>
        )}
        {toasts && (
          <Toasts>{toasts}</Toasts>
        )}
      </Wrapper>
    </ConfigProvider>
  );
}
