import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { UiAuthSignInLayout } from '@/ui';
import { useAuthSignIn } from '@/api';
import { useFormFlow } from '@/hooks';
import { getAuthSignUpRoute } from '@/router';

export function SignInForm() {
  const {
    signIn,
  } = useAuthSignIn();

  const {
    form,
    onSubmit,
    onValuesChange,
    isSubmitting,
    t,
  } = useFormFlow(signIn, {
    namespace: 'auth',
    keyPrefix: 'signIn',
  });

  return (
    <Form
      onValuesChange={onValuesChange}
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      autoComplete="off"
      disabled={isSubmitting}
      initialValues={{
        login: '',
        password: '',
      }}
    >
      <UiAuthSignInLayout
        title={t('title')}
        action={(
          <Link to={getAuthSignUpRoute()}>
            <Button type="link">
              {t('signUp')}
            </Button>
          </Link>
        )}
        login={(
          <Form.Item
            label={t('field.login.label')}
            name="login"
          >
            <Input autoFocus />
          </Form.Item>
        )}
        password={(
          <Form.Item label={t('field.password.label')} name="password">
            <Input.Password />
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
