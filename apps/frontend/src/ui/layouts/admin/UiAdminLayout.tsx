import { Layout } from 'antd';
import { PropsWithChildren, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { useToggle } from 'usehooks-ts';
import { storage } from '@oapis/common';

type Props = PropsWithChildren<{
  sider?: ReactNode;
  collapsed?: boolean;
  onCollapse?(collapsed: boolean): void;
}>;

const Content = styled(Layout.Content)`  
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  padding: 20px;
  
  height: 0;
  flex-grow: 1;
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export function UiAdminLayout({
  sider,
  children,
  collapsed,
  onCollapse,
}: Props) {
  return (
    <Layout>
      <Layout.Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        {sider}
      </Layout.Sider>
      <Content>
        <Body>
          {children}
        </Body>
      </Content>
    </Layout>
  );
}
