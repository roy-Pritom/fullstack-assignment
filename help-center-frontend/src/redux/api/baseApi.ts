// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TagTypeList } from '../../types/tagTypes'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://help-center-backend-kappa.vercel.app' }),
  endpoints: () => ({}),
  tagTypes:TagTypeList
})

