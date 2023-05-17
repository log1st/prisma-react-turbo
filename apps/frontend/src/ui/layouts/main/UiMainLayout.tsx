import { PropsWithChildren, ReactNode } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  menu?: ReactNode;
  side?: ReactNode;
  logo?: ReactNode;
}>;

const Header = styled(Layout.Header)`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 20px;
`;

const Side = styled.div`
  margin-left: auto;
`;

const Content = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
`;

export function UiMainLayout({
  logo,
  side,
  menu,
  children,
}: Props) {
  return (
    <Layout>
      <Header>
        <Logo>
          {logo}
        </Logo>
        {menu}
        <Side>
          {side}
        </Side>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
}
