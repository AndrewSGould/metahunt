import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import userSlice from './userSlice';
import tokenRefreshMiddleware from './tokenRefreshMiddleware';
import discordSlice from './discordSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userSlice,
    discord: discordSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(tokenRefreshMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
