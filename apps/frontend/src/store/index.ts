import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {
  FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,
} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
import {authApi, configApi, rolesApi, usersApi} from '@/api';
import { authSlice } from '@/store/slices/authSlice';

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistReducer({
      key: 'authSlice',
      storage,
    }, authSlice.reducer),
    [authApi.reducerPath]: persistReducer({
      key: 'authApi',
      storage,
    }, authApi.reducer) as typeof authApi.reducer,
    [rolesApi.reducerPath]: rolesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [configApi.reducerPath]: configApi.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: false ?? {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    })
      .concat(
        authApi.middleware,
        rolesApi.middleware,
        usersApi.middleware,
        configApi.middleware,
      )
  ),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
