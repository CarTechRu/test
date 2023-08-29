import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiPath = process.env.CONFIG.API_BASEPATH;

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: apiPath }),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => '/filterAuctions',
    }),
    getCar: builder.query({
      query: (arg) => `/auction/${arg}`,
      providesTags: (result, error, arg) => [{ type: 'Car', id: arg }],
    }),
    searchCar: builder.query({
      query: (arg) => `/filterAuctions?search=${arg}`,
      providesTags: (result, error, arg) => [{ type: 'Car', id: arg }],
    }),
  }),
});

export const { useGetCarsQuery, useGetCarQuery, useSearchCarQuery } = api;
