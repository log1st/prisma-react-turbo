import { ReactNode } from 'react';
import { Col, Row, Typography } from 'antd';
import styled from 'styled-components';

type Props = {
  title?: ReactNode;
  message?: ReactNode;
  action?: ReactNode;
  meta?: ReactNode;
};

const Footer = styled(Col)`
  padding-top: 30px;
`;

export function UiErrorLayout({
  title,
  message,
  action,
  meta,
}: Props) {
  return (
    <Row>
      {title && (
        <Col span={24}>
          <Row justify="center">
            <Typography.Title level={2}>
              {title}
            </Typography.Title>
          </Row>
        </Col>
      )}
      {message && (
        <Col span={24}>
          <Row justify="center">
            <Typography.Text>
              {message}
            </Typography.Text>
          </Row>
        </Col>
      )}
      {action && (
        <Col span={24}>
          <Row justify="center">
            {action}
          </Row>
        </Col>
      )}
      {meta && (
        <Footer span={24}>
          <Row justify="center">
            <Typography.Text disabled>
              {meta}
            </Typography.Text>
          </Row>
        </Footer>
      )}
    </Row>
  );
}
