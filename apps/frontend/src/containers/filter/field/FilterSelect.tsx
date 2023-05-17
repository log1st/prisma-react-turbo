import { Form, Select } from 'antd';
import { ListingQuery } from '@/types/listing';
import { FilterFieldOptions } from '@/containers';

export type FilterSelectProps<Entity, Option extends Record<any, any> = Record<any, any>> = {
  options?: Array<Option>
  valueField?: keyof Option;
  labelField?: keyof Option;
  useQuery?: ListingQuery<Option, true>;
  field?: FilterFieldOptions;
};

export function FilterSelect<Entity>({
  options,
  valueField,
  labelField,
  useQuery,
  field,
}: FilterSelectProps<Entity>) {
  const queryResponse = useQuery?.({
    take: 0,
    skip: 0,
  });

  return (
    <Form.Item {...field}>
      <Select
        allowClear
        options={options || queryResponse.data?.records}
        mode="multiple"
        fieldNames={{
          value: valueField,
          label: labelField,
        }}
      />
    </Form.Item>
  );
}
