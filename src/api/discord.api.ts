// endpoints/discordEndpoints.ts
import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { DiscordLoginCredentials, DiscordLoginResponse } from '../types';

export const discordEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  discordLogin: builder.mutation<DiscordLoginResponse, DiscordLoginCredentials>(
    {
      query: (creds) => ({
        url: '/v2/discord/login',
        method: 'POST',
        body: creds,
      }),
      invalidatesTags: ['ping'],
    }
  ),
  pingDiscord: builder.query<string, void>({
    query: () => '/v2/discord/ping',
    providesTags: ['ping'],
  }),
  resyncDiscordRoles: builder.mutation<DiscordLoginResponse, void>({
    query: () => ({
      url: '/v2/discord/resyncroles',
      method: 'POST',
    }),
    invalidatesTags: ['ping'],
  }),
});
