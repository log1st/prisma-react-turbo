import { Form, Input } from 'antd';
import { FilterFieldOptions } from '@/containers';

export type FilterInputProps<Entity> = {
  field?: FilterFieldOptions;
};

export function FilterInput<Entity>({
  field,
}: FilterInputProps<Entity>) {
  return (
    <Form.Item {...field}>
      <Input allowClear />
    </Form.Item>
  );
}
