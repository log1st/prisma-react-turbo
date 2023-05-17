import {
  Button,
  Col, Form, Select, Spin,
} from 'antd';
import styled from 'styled-components';
import { useConfig, useConfigUpdate, useRoles } from '@/api';
import { useFormFlow } from '@/hooks';

const Loader = styled.div`
  height: 200px;
`;

export function AdminConfigPage() {
  const { data, isLoading } = useConfig();

  const { data: rolesData, isLoading: isLoadingRoles } = useRoles({
    take: 0,
  });

  const { updateConfig } = useConfigUpdate();

  const {
    form,
    onSubmit,
    isSubmitting,
    t,
    onValuesChange,
  } = useFormFlow(updateConfig, {
    namespace: 'admin',
    keyPrefix: 'config.form',
  });

  if (isLoading) {
    return (
      <Spin tip={t('loading')}>
        <Loader />
      </Spin>
    );
  }

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      disabled={isSubmitting}
      onValuesChange={onValuesChange}
      initialValues={data}
    >
      <Col span={24}>
        <Form.Item
          name="initialRoleId"
          label={t('field.initialRoleId.label')}
        >
          <Select
            options={rolesData?.records}
            loading={isLoadingRoles}
            fieldNames={{
              value: 'id',
              label: 'slug',
            }}
            allowClear
          />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button
          type="primary"
          htmlType="submit"
          block
          loading={isSubmitting}
        >
          {t('submit')}
        </Button>
      </Col>
    </Form>
  );
}
