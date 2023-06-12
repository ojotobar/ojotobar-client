import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, setHeaders } from '../../helpers/settings'

export const educationApi = createApi({
    reducerPath: 'educationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/education`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Education'],
    endpoints: (builder) => ({
        getUserEducation: builder.query({
            query: (userId) => `/${userId}`,
            invalidatesTags: ['Education']
        })
    })
});

export const {
    useGetUserEducationQuery
} = educationApi;