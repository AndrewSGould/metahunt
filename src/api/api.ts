import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../state/store';
import { logout, setToken } from '../state/userSlice';
import { discordEndpoints } from './discord.api';
import { oxblEndpoints } from './oxbl.api';
import { userEndpoints } from './user.api';
import { bcmEndpoints } from './bcm.api';

const API_BASE_URL = process.env.REACT_APP_BASE_API_URL;

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  // TODO: when 500, redirect to error page
  if (result.error && result.error.status === 401) {
    const userState = (api.getState() as RootState).user;

    const refreshResult = await fetch(`${API_BASE_URL}/v2/token/refresh`, {
      method: 'POST',
      body: JSON.stringify({
        accessToken: userState.token,
        refreshToken: userState.refreshToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (refreshResult.ok) {
      const { token } = await refreshResult.json();
      api.dispatch(setToken(token));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      window.location.href = '/'; // TODO: redirect to actual logout page
    }
  }
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 60 * 60 * 24, // 1 day, extremely long default cache since the app only changes data weekly
  endpoints: (builder) => ({
    ...discordEndpoints(builder),
    ...oxblEndpoints(builder),
    ...userEndpoints(builder),
    ...bcmEndpoints(builder),
  }),
});

export const {
  useDiscordLoginMutation,
  usePingDiscordQuery,
  useLoginMutation,
  useResyncDiscordRolesMutation,
  useGetLocationQuery,
  useUpdateLocationMutation,
  useGetBcmPlayersQuery,
  useGetBcmPlayerCompareQuery,
} = api;
