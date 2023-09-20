import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.CONFIG.API_BASEPATH }),
  endpoints: (builder) => ({
    getCars: builder.query({
      query: (search = '') => `filterAuctions?${search && `search=${search}`}`,
    }),
    getDataCar: builder.query({
      query: (id) => `auction/${id}`,
    }),
  }),
});

export const { useGetCarsQuery, useGetDataCarQuery } = carsApi;
