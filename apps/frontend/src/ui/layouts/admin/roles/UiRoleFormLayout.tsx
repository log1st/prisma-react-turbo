import { ReactNode } from 'react';
import {
  Col, Row, Spin, Typography,
} from 'antd';
import styled from 'styled-components';

type Props = {
  title?: ReactNode;
  slug?: ReactNode;
  permissions?: ReactNode;
  submit?: ReactNode;
};

export function UiRoleFormLayout({
  title,
  permissions,
  slug,
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
        {slug}
      </Col>
      <Col span={24}>
        {permissions}
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

UiRoleFormLayout.Loader = Loader;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

UiRoleFormLayout.Group = Group;
