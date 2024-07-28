import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { BcmCompareStats } from '../bcmx/types';

export const bcmEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getBcmPlayers: builder.query<string[], void>({
    query: () => '/v2/bcm/players/getPlayerList',
    transformResponse: (data) => {
      return data.sort((a: string, b: string) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );
    },
  }),
  getBcmPlayerCompare: builder.query<BcmCompareStats, string>({
    query: (player) => `/v2/bcm/players/getCompareStats?player=${player}`,
  }),
});
