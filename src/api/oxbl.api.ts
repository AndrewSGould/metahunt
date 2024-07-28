// endpoints/oxblEndpoints.ts
import { EndpointBuilder } from '@reduxjs/toolkit/query';
import { LoginCredentials, LoginResponse } from '../types';

export const oxblEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  login: builder.mutation<LoginResponse, LoginCredentials>({
    query: (credentials) => ({
      url: '/v2/oxbl/login',
      method: 'POST',
      body: credentials,
    }),
    invalidatesTags: ['ping'],
  }),
});
