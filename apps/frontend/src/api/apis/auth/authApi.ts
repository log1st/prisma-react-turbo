import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/baseQuery';

export enum AuthTag {
  data = 'data',
}

export const authApi = createApi({
  reducerPath: 'authApi',
  endpoints: () => ({}),
  baseQuery,
  tagTypes: Object.values(AuthTag),
});
