import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducer from "./reducers";

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
