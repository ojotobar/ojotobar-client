import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../helpers/settings";
import { setHeaders } from "../../helpers/settings";

export const experienceApi = createApi({
    reducerPath: 'experienceApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/experience`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Experience'],
    endpoints: (builder) => ({
        getUserExperience: builder.query({
            query: (userId) => `/${userId}`,
            invalidatesTags: ['Experience']
        })
    })
});

export const {
    useGetUserExperienceQuery
} = experienceApi;