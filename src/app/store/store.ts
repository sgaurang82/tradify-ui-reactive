import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";
import watchListReducer from "./slices/watchListSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    watchList: watchListReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
