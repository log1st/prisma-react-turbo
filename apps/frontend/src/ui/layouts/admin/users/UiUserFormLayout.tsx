import { ReactNode } from 'react';
import {
  Col, Row, Spin, Typography,
} from 'antd';
import styled from 'styled-components';

type Props = {
  title?: ReactNode;
  login?: ReactNode;
  password?: ReactNode;
  roleId?: ReactNode;
  submit?: ReactNode;
};

export function UiUserFormLayout({
  title,
  login,
  password,
  roleId,
  submit,
}: Props) {
  return (
    <Row gutter={20}>
      <Col span={24}>
        <Typography.Title level={4}>
          {title}
        </Typography.Title>
      </Col>
      <Col span={24}>
        {login}
      </Col>
      <Col span={24}>
        {password}
      </Col>
      <Col span={24}>
        {roleId}
      </Col>
      <Col span={24}>
        {submit}
      </Col>
    </Row>
  );
}

type LoaderProps = {
  tip?: ReactNode;
};

const LoaderContent = styled.div`
  height: 300px;
`;

function Loader({ tip }: LoaderProps) {
  return (
    <Spin size="large" tip={tip}>
      <LoaderContent />
    </Spin>
  );
}

UiUserFormLayout.Loader = Loader;
