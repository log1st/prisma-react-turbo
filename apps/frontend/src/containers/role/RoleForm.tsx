import { ReactNode, useCallback, useMemo } from 'react';
import {
  Button, Checkbox, Form, Input,
} from 'antd';
import { contracts } from '@oapis/contracts';
import styled from 'styled-components';
import { usePermissionName, useFormFlow } from '@/hooks';
import { usePermissions } from '@/api';
import { UiRoleFormLayout } from '@/ui';

export type RoleFormProps<Request, Response> = {
  mutate: Parameters<typeof useFormFlow<Request, Response>>[0];
  title?: ReactNode;
  initialValues?: Pick<contracts.Role, 'slug'> & {
    permissions: Array<contracts.Permission['id']>
  };
  onSuccess?(response: Response): void;
};

const CheckboxGroup = styled(Checkbox.Group)`
  flex-wrap: wrap;
  gap: 10px;
  
  > * {
    margin: 0 !important;
  }
`;

export function RoleForm<Request, Response>({
  mutate,
  title,
  initialValues = {
    slug: '',
    permissions: [],
  },
  onSuccess,
}: RoleFormProps<Request, Response>) {
  const {
    permissionName,
    permissionNamespaceName,
  } = usePermissionName();

  const {
    data: permissions = [],
    isLoading: isLoadingPermissions,
  } = usePermissions();

  const localInitialValues = useMemo(() => ({
    slug: initialValues.slug,
    permissions: permissions.reduce((a, p) => ({
      ...a,
      [p.namespace]: [...a[p.namespace] || [], p.id].filter(
        (id) => initialValues.permissions.includes(id),
      ),
    }), {} as Record<string, string[]>),
  }), [initialValues, permissions]);

  const localMutate = useCallback((values: typeof localInitialValues) => mutate({
    slug: values.slug,
    permissions: [].concat(...Object.values(values.permissions)),
  } as Request), [mutate]);

  const {
    form,
    onSubmit,
    isSubmitting,
    onValuesChange,
    t,
  } = useFormFlow(localMutate, {
    namespace: 'admin',
    keyPrefix: 'role.form',
    onSuccess,
  });

  if (isLoadingPermissions) {
    return (
      <UiRoleFormLayout.Loader tip={t('loading')} />
    );
  }

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
      layout="vertical"
      initialValues={localInitialValues}
      disabled={isSubmitting}
    >
      <UiRoleFormLayout
        title={title}
        slug={(
          <Form.Item name="slug" label={t('field.slug.label')}>
            <Input autoFocus />
          </Form.Item>
        )}
        permissions={(
            Object.entries(permissions.reduce((a, p) => ({
              ...a,
              [p.namespace]: [...a[p.namespace] || [], p],
            }), {} as Record<string, Array<contracts.PermissionConfig>>)).map(([namespace, ps]) => (
              <Form.Item
                name={['permissions', namespace]}
                label={permissionNamespaceName(namespace)}
                key={namespace}
              >
                <CheckboxGroup
                  options={ps.map((p) => ({
                    value: p.id,
                    label: permissionName(p),
                  }))}
                />
              </Form.Item>
            ))
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

RoleForm.Loader = UiRoleFormLayout.Loader;
