import {
  Button,
} from 'antd';
import styled from 'styled-components';
import { useAuthMe, useAuthSignOut } from '@/api';

const Body = styled.div`
  display: flex;
  align-items: center;
  padding: 24px;
`;

export function IndexPage() {
  const { data } = useAuthMe();
  const { signOut } = useAuthSignOut();

  return (
    <Body>
      <Button onClick={signOut}>
        {`Sign out${data ? ` as ${data.login}` : ''}`}
      </Button>
    </Body>
  );
}
