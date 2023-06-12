import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApi } from '../features/api/userApi';
import storage from 'redux-persist/lib/storage/';
import { persistReducer, PERSIST } from 'redux-persist';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from '../features/auth/authSlice';
import { educationApi } from '../features/api/educationApi';
import { skillApi } from '../features/api/skillApi';
import { projectApi } from '../features/api/projectApi';
import { mediaLinkApi } from '../features/api/mediaLinkApi';
import { experienceApi } from '../features/api/experienceApi';
import { notificationApi } from '../features/api/notificationApi';

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  [educationApi.reducerPath]: educationApi.reducer,
  [skillApi.reducerPath]: skillApi.reducer,
  [projectApi.reducerPath]: projectApi.reducer,
  [mediaLinkApi.reducerPath]: mediaLinkApi.reducer,
  [experienceApi.reducerPath]: experienceApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(
        userApi.middleware,
        educationApi.middleware,
        skillApi.middleware,
        projectApi.middleware,
        mediaLinkApi.middleware,
        experienceApi.middleware,
        notificationApi.middleware
      )
});

setupListeners(store.dispatch);
