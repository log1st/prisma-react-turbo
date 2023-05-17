import {
  Button, Card,
  Col, Form, Row, Typography,
} from 'antd';
import {
  ReactNode, useCallback, useMemo,
} from 'react';
import {
  FilterSelect, FilterSelectProps, FilterInput, FilterDatepicker,
} from '@/containers';
import { useFormFlow } from '@/hooks';

export enum FilterFieldType {
  input = 'input',
  select = 'select',
  date = 'date',
}

export type FilterFieldConfig<Entity, Type extends FilterFieldType> = {
  [FilterFieldType.input]: {},
  [FilterFieldType.select]: Omit<FilterSelectProps<Entity>, 'field'>
  [FilterFieldType.date]: {}
}[Type];

export type FilterFieldOptions = {
  name: string | string[];
  label?: ReactNode;
};

export type FilterField<Entity, Type extends FilterFieldType = FilterFieldType> = {
  key: string;
  span?: number;
  type?: Type;
  dataIndex?: string | string[];
  config?: FilterFieldConfig<Entity, Type>;
  label?: ReactNode;
};

export type FilterProps<Entity> = {
  fields: Array<FilterField<Entity>>
  namespace?: string;
  keyPrefix?: string;
  value?: any;
  onChange?(payload: any): void;
};

export function Filter<Entity>({
  fields,
  namespace,
  keyPrefix,
  value,
  onChange,
}: FilterProps<Entity>) {
  const {
    form,
    onSubmit,
    isSubmitting,
    t,
    onValuesChange,
  } = useFormFlow((newValue) => {
    onChange?.(newValue);
    return Promise.resolve({
      data: null,
    });
  }, {
    namespace,
    keyPrefix,
  });

  const isDirty = useMemo(() => false, []);

  const onReset = useCallback(() => {
    form.setFields(fields.map((field) => ({
      name: field.dataIndex || field.key,
      value: null,
    })));
  }, [form.resetFields]);

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      onValuesChange={onValuesChange}
      layout="vertical"
      initialValues={value}
      disabled={isSubmitting}
    >
      <Card
        title={t('title')}
        size="small"
        extra={(
          <>
            {isDirty && (
              <Button
                htmlType="button"
                onClick={onReset}
                size="small"
                type="link"
                danger
              >
                {t('reset')}
              </Button>
            )}
            <Button
              htmlType="submit"
              size="small"
              type="link"
            >
              {t('submit')}
            </Button>
          </>
        )}
      >
        <Row gutter={16}>
          {fields.map(({
            span = 24,
            key,
            type = FilterFieldType.input,
            dataIndex = key,
            label = <Typography.Text ellipsis>{t(`field.${key}.label`)}</Typography.Text>,
            config,
          }) => {
            const field = { name: dataIndex, label };
            return (
              <Col key={key} span={span}>
                {type === FilterFieldType.input && (
                  <FilterInput
                    {...config}
                    field={field}
                  />
                )}
                {type === FilterFieldType.select && (
                  <FilterSelect
                    {...config}
                    field={{ label, name: dataIndex }}
                  />
                )}
                {type === FilterFieldType.date && (
                  <FilterDatepicker
                    {...config}
                    field={{ label, name: dataIndex }}
                  />
                )}
              </Col>
            );
          })}
        </Row>
      </Card>
    </Form>
  );
}
