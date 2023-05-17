import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '@/api';

export enum UsersTag {
  list = 'list',
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  endpoints: () => ({}),
  baseQuery,
  tagTypes: Object.values(UsersTag),
});
