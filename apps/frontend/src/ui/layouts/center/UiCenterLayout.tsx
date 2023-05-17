import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Content = styled(Layout.Content)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function UiCenterLayout({
  children,
}: PropsWithChildren) {
  return (
    <Layout>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}
