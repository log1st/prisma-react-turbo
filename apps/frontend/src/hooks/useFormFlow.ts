import { Form } from 'antd';
import { useCallback } from 'react';
import { useToggle } from 'usehooks-ts';
import { SerializedError } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import { Callbacks } from 'rc-field-form/lib/interface';
import { RequestError } from '@/api';
import { useToasts } from '@/providers';

type UseFormFlowOptions<Response> = {
  namespace?: string;
  keyPrefix?: string;
  onSuccess?(response: Response): void;
};

export const useFormFlow = <Request, Response>(
  mutate: (payload: Request) => Promise<{
    data: Response
  } | {
    error: RequestError | SerializedError
  }>, {
    namespace,
    keyPrefix,
    onSuccess,
  }: UseFormFlowOptions<Response> = {},
) => {
  const { t } = useTranslation(namespace, {
    keyPrefix,
  });

  const [form] = Form.useForm<Request>();

  const [isSubmitting, , setIsSubmitting] = useToggle();

  const { showToast } = useToasts();

  const onSubmit = useCallback(async (values: Request) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    form.setFields(Object.entries(values).map(([name]) => ({
      name,
      errors: [],
    })));

    const response = await mutate(values);

    if ('error' in response) {
      if ('status' in response.error) {
        form.setFields(Object.entries(response.error.errors).map(([name, errors]) => ({
          name,
          errors: errors.map(
            (error) => t(`field.${error.property}.validation.${error.type}`, error.constraints),
          ),
        })));
      }
      if ('message' in response.error && response.error.message) {
        showToast({
          namespace,
          keyPrefix: `${keyPrefix}.error.${response.error.message}`,
          type: 'error',
        });
      }
    }

    if ('data' in response) {
      onSuccess?.(response.data);
    }
    setIsSubmitting(false);
  }, [mutate, form]);

  const onValuesChange = useCallback<Callbacks<Request>['onValuesChange']>((changedValues) => {
    form.setFields(Object.entries(changedValues).map(([name]) => ({
      name,
      errors: [],
    })));
  }, [form]);

  return {
    form,
    onSubmit,
    isSubmitting,
    t,
    onValuesChange,
  };
};
