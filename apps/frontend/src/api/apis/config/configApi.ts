import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/api';

export enum ConfigsTag {
  list = 'list',
}

export const configApi = createApi({
  reducerPath: 'configApi',
  endpoints: () => ({}),
  baseQuery,
  tagTypes: Object.values(ConfigsTag),
});
