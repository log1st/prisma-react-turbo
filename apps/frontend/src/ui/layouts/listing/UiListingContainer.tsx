import { PropsWithChildren, ReactNode } from 'react';
import {
  Col, Row, Space, Typography,
} from 'antd';
import styled from 'styled-components';

type Props = PropsWithChildren<{
  title?: ReactNode;
  actions?: ReactNode;
  footer?: ReactNode;
  filters?: ReactNode;
}>;

const Filters = styled(Col)`
  padding: 20px 0;
`;

export function UiListingContainer({
  title,
  actions,
  children,
  footer,
  filters,
}: Props) {
  return (
    <Row gutter={16}>
      {!!(title || actions) && (
        <Col span={24}>
          <Row justify="space-between">
            <Col>
              {title && (
                <Typography.Title level={4}>{title}</Typography.Title>
              )}
            </Col>
            <Col>
              <Space>
                {actions}
              </Space>
            </Col>
          </Row>
        </Col>
      )}
      {filters && (
        <Filters span={24}>
          {filters}
        </Filters>
      )}
      <Col span={24}>
        {children}
      </Col>
      {footer && (
        <Col span={24}>
          {footer}
        </Col>
      )}
    </Row>
  );
}
