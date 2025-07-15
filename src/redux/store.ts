import { configureStore } from "@reduxjs/toolkit";
import periodReducer from "./periodSlice";

export const store = configureStore({
  reducer: {
    period: periodReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
