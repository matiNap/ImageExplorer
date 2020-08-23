import { createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../store";
import { REHYDRATE } from "redux-persist/es/constants";

interface User {
  acces_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}

const INIT_STATE: {
  user: User | null;
} = {
  user: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {},
  extraReducers: {
    [REHYDRATE]: (state) => {
      return { ...state };
    },
  },
});

export default appSlice.reducer;
