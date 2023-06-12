import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../helpers/settings';
import { setHeaders } from '../../helpers/settings';

export const mediaLinkApi = createApi({
    reducerPath: 'mediaLinkApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/social-link`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Social'],
    endpoints: (builder) => ({
        getUserSocialLinks: builder.query({
            query: (userId) => `/${userId}`,
            invalidatesTags: ['Social']
        })
    })
});

export const {
    useGetUserSocialLinksQuery
} = mediaLinkApi;