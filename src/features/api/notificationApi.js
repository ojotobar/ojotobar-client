import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "../../helpers/settings";
import { setHeaders } from "../../helpers/settings";

export const notificationApi = createApi({
    reducerPath: 'notificationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/notification`,
        prepareHeaders: (headers) => {
            setHeaders(headers);
        }
    }),
    tagTypes: ['Notification'],
    endpoints: (builder) => ({
        sendNotification: builder.mutation({
            query: ({ userId, formData }) => ({
                url: `/${userId}`,
                method: 'POST',
                body: formData
            }),
            providesTags: ['Notification']
        })
    })
});

export const {
    useSendNotificationMutation
} = notificationApi;