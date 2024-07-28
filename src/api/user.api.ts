import { EndpointBuilder } from '@reduxjs/toolkit/query';
import Location from '../types/location.type';

export const userEndpoints = (builder: EndpointBuilder<any, any, any>) => ({
  getLocation: builder.query<Location, void>({
    query: () => '/v2/user/getLocation',
    providesTags: ['location'],
  }),
  updateLocation: builder.mutation<void, Location>({
    query: (loc) => ({
      url: '/v2/user/updateLocation',
      method: 'PUT',
      body: loc,
    }),
    invalidatesTags: ['location'],
  }),
});
