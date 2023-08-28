import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.CONFIG.API_BASEPATH }),
  endpoints: (builder) => ({
    filterAuctions: builder.query({
      query: (search = '') => `filterAuctions?search=${search}`,
    }),
    getAuction: builder.query({
      query: (auctionId) => `auction/${auctionId}`,
    }),
  }),
});

export const {
  useFilterAuctionsQuery,
  useGetAuctionQuery,
  useLazyGetAuctionQuery,
  useLazyFilterAuctionsQuery,
} = api;
