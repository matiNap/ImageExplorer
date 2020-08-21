import { createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../store";
import { REHYDRATE } from "redux-persist/es/constants";

const appSlice = createSlice({
  name: "app",
  initialState: {},
  reducers: {},
  extraReducers: {
    [REHYDRATE]: (state) => {
      return { ...state };
    },
  },
});

export default appSlice.reducer;
