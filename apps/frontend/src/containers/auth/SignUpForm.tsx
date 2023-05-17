import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { UiAuthSignUpLayout } from '@/ui';
import { useAuthSignUp } from '@/api';
import { useFormFlow } from '@/hooks';
import { getAuthSignInRoute } from '@/router';

export function SignUpForm() {
  const {
    signUp,
  } = useAuthSignUp();

  const {
    form,
    onSubmit,
    isSubmitting,
    onValuesChange,
    t,
  } = useFormFlow(signUp, {
    namespace: 'auth',
    keyPrefix: 'signUp',
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
        passwordConfirmation: '',
      }}
    >
      <UiAuthSignUpLayout
        title={t('title')}
        action={(
          <Link to={getAuthSignInRoute()}>
            <Button type="link">
              {t('signIn')}
            </Button>
          </Link>
        )}
        login={(
          <Form.Item
            label={t('field.login.label')}
            name="login"
          >
            <Input autoFocus showCount />
          </Form.Item>
        )}
        password={(
          <Form.Item label={t('field.password.label')} name="password">
            <Input.Password showCount />
          </Form.Item>
        )}
        passwordConfirmation={(
          <Form.Item label={t('field.passwordConfirmation.label')} name="passwordConfirmation">
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
