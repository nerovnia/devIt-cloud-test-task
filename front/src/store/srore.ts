import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from './requests/requestsSlice';
import { rateLimitMiddleware } from '../middleware/rate-limit'

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rateLimitMiddleware),
});