import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, setHeaders } from '../../helpers/settings';

export const skillApi = createApi({
    reducerPath: 'skillApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/skill`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Skill'],
    endpoints: (builder) => ({
        getUserSkills: builder.query({
            query: (userId) => `/${userId}`,
            invalidatesTags: ['Skill']
        })
    })
})

export const {
    useGetUserSkillsQuery
} = skillApi;