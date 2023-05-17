import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/api';

export enum RolesTag {
  list = 'list',
}

export const rolesApi = createApi({
  reducerPath: 'rolesApi',
  endpoints: () => ({}),
  baseQuery,
  tagTypes: Object.values(RolesTag),
});
