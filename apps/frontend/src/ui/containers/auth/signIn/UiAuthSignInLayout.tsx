import { Col, Row, Typography } from 'antd';
import { ReactNode } from 'react';

type Props = {
  title?: ReactNode;
  login?: ReactNode;
  password?: ReactNode;
  submit?: ReactNode;
  action?: ReactNode;
};

export function UiAuthSignInLayout({
  login,
  password,
  submit,
  action,
  title,
}: Props) {
  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Row>
          <Col flex="auto"><Typography.Title level={4}>{title}</Typography.Title></Col>
          <Col>{action}</Col>
        </Row>
      </Col>
      <Col span={24}>{login}</Col>
      <Col span={24}>{password}</Col>
      <Col span={24}>{submit}</Col>
    </Row>
  );
}
