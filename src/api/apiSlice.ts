import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../state/store';
import { logout, setToken } from '../state/userSlice';
import {
  DiscordLoginCredentials,
  DiscordLoginResponse,
  LoginCredentials,
  LoginResponse,
} from '../types';

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
      window.location.href = '/';
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 5000, // extremely long default cache since the app only changes data weekly
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginCredentials>({
      query: (credentials) => ({
        url: '/v2/oxbl/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    discordLogin: builder.mutation<
      DiscordLoginResponse,
      DiscordLoginCredentials
    >({
      query: (creds) => ({
        url: '/v2/discord/login',
        method: 'POST',
        body: creds,
      }),
    }),
    getBcmPlayers: builder.query<any, void>({
      query: () => 'bcm/getPlayerList',
    }),
  }),
});

export const {
  useLoginMutation,
  useDiscordLoginMutation,
  useGetBcmPlayersQuery,
} = apiSlice;
