import { ReactNode, useEffect } from 'react';
import {
  Button, Form, Input, Select,
} from 'antd';
import { contracts } from '@oapis/contracts';
import { useFormFlow } from '@/hooks';
import { UiUserFormLayout } from '@/ui';
import { useRoles } from '@/api';

export type UserFormProps<Request, Response> = {
  mutate: Parameters<typeof useFormFlow<Request, Response>>[0];
  title?: ReactNode;
  initialValues?: Pick<contracts.User, 'login' | 'roleId' | 'password'>;
  onSuccess?(response: Response): void;
};

export function UserForm<Request, Response>({
  mutate,
  title,
  initialValues = {
    roleId: null,
    login: '',
    password: '',
  },
  onSuccess,
}: UserFormProps<Request, Response>) {
  const {
    form,
    onSubmit,
    isSubmitting,
    onValuesChange,
    t,
  } = useFormFlow(mutate, {
    namespace: 'admin',
    keyPrefix: 'user.form',
    onSuccess,
  });

  const {
    data: roleData,
    isLoading: isLoadingRoles,
  } = useRoles({
    take: 0,
  });

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
      layout="vertical"
      initialValues={initialValues}
      disabled={isSubmitting}
    >
      <UiUserFormLayout
        title={title}
        login={(
          <Form.Item name="login" label={t('field.login.label')}>
            <Input autoFocus />
          </Form.Item>
        )}
        password={(
          <Form.Item name="password" label={t('field.password.label')}>
            <Input.Password />
          </Form.Item>
        )}
        roleId={(
          <Form.Item name="roleId" label={t('field.roleId.label')}>
            <Select
              options={roleData?.records}
              fieldNames={{
                value: 'id',
                label: 'slug',
              }}
              loading={isLoadingRoles}
              allowClear
            />
          </Form.Item>
        )}
        submit={(
          <Button
            htmlType="submit"
            type="primary"
            block
            loading={isSubmitting}
          >
            {t('submit')}
          </Button>
        )}
      />
    </Form>
  );
}

UserForm.Loader = UiUserFormLayout.Loader;
