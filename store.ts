// store.ts
import { configureStore } from '@reduxjs/toolkit';
import analyticsReducer from './features/analytics/analyticsSlice';

export const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
