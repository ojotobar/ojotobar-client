import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, setHeaders } from '../../helpers/settings';

export const userApi = createApi({ 
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${BASE_URL}/user`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ``,
            invalidatesTags: ['User']
        }),
        getUserStats: builder.query({
            query: (userId) => `stats/${userId}`,
            invalidatesTags: ['User']
        }),
        getPersonalInfo: builder.query({
            query: (userId) => `${userId}/info`,
            invalidatesTags: ['User']
        })
    })
})

export const {
    useGetUserDetailsQuery,
    useGetUserStatsQuery,
    useGetPersonalInfoQuery
} = userApi;