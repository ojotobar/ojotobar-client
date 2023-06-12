import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../helpers/settings';
import { setHeaders } from '../../helpers/settings';

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/project`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Project'],
    endpoints: (builder) => ({
        getUserProjects: builder.query({
            query: (userId) => `/${userId}`,
            invalidatesTags: ['Project']
        })
    })
});

export const {
    useGetUserProjectsQuery
} = projectApi;