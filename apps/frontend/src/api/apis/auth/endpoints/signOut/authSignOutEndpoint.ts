import { authApi, AuthTag } from '@/api';

export const authSignOutEndpoint = authApi.injectEndpoints({
  endpoints: (builder) => ({
    signOut: builder.mutation({
      queryFn() {
        return {
          data: null,
        };
      },
      invalidatesTags: [
        AuthTag.data,
      ],
    }),
  }),
  overrideExisting: true,
});
