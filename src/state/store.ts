import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import userSlice from './userSlice';
import tokenRefreshMiddleware from './tokenRefreshMiddleware';
import discordSlice from './discordSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userSlice,
    discord: discordSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(tokenRefreshMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
