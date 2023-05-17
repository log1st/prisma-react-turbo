import { DatePicker, Form } from 'antd';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useState } from 'react';
import { FilterFieldOptions } from '@/containers';

export type FieldDatepickerProps<Entity> = {
  field: FilterFieldOptions;
};

const Picker = styled(DatePicker)`
  width: 100%;
`;

export function FilterDatepicker<Entity>({
  field,
}: FieldDatepickerProps<Entity>) {
  const [showTime] = useState({
    defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
  });

  return (
    <Form.Item {...field}>
      <Picker
        showTime={showTime}
      />
    </Form.Item>
  );
}
