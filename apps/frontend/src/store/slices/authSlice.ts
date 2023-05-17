import { contracts } from '@oapis/contracts';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { authSignInEndpoint, authSignOutEndpoint, authSignUpEndpoint } from '@/api';

export type AuthSliceState = {
  data: Omit<contracts.AuthDataType, 'data'> | null;
};

const initialState: AuthSliceState = {
  data: null,
};

export const authSlice = createSlice({
  name: 'auth',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addMatcher(
      authSignInEndpoint.endpoints.signIn.matchFulfilled,
      (state, { payload: { accessToken, refreshToken } }) => {
        Object.assign(state, {
          data: {
            accessToken,
            refreshToken,
          },
        });
      },
    );
    builder.addMatcher(
      authSignUpEndpoint.endpoints.signUp.matchFulfilled,
      (state, { payload: { accessToken, refreshToken } }) => {
        Object.assign(state, {
          data: {
            accessToken,
            refreshToken,
          },
        });
      },
    );

    builder.addMatcher(
      authSignOutEndpoint.endpoints.signOut.matchFulfilled,
      (state) => {
        Object.assign(state, {
          data: null,
        });
      },
    );
  },
});

const authSliceSelector = (state: Record<typeof authSlice.name, AuthSliceState>) => state.auth;

export const isAuthorizedSelector = createSelector(
  authSliceSelector,
  (state) => !!state.data,
);

export const accessTokenSelector = createSelector(
  authSliceSelector,
  (state) => state.data?.accessToken,
);

export const refreshTokenSelector = createSelector(
  authSliceSelector,
  (state) => state.data?.refreshToken,
);
