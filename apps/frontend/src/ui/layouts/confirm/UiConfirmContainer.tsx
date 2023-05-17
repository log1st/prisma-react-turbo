import { ReactNode } from 'react';
import {
  Col, Row, Space, Typography,
} from 'antd';

type Props = {
  title?: ReactNode;
  message?: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
};

export function UiConfirmContainer({
  title,
  message,
  actions,
  icon,
}: Props) {
  return (
    <Row gutter={[16, 16]}>
      {title && (
        <Col span={24}>
          <Space>
            {icon}
            <Typography.Text strong>
              {title}
            </Typography.Text>
          </Space>
        </Col>
      )}
      {message && (
        <Col span={24}>
          <Typography.Text>
            {message}
          </Typography.Text>
        </Col>
      )}
      {actions && (
        <Col span={24}>
          <Row justify="end">
            <Space>
              {actions}
            </Space>
          </Row>
        </Col>
      )}
    </Row>
  );
}
