import { createSlice } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from "../store";
import { REHYDRATE } from "redux-persist/es/constants";
import { Image } from "../types";
import { AppThunk } from "../store";
import unsplash from "../apis/unsplash";

interface User {
  acces_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}

const INIT_STATE: {
  latestImages: Image[] | null;
} = {
  latestImages: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setLatestImages: (state, action) => {
      state.latestImages = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state) => {
      return { ...state };
    },
  },
});

const { setLatestImages } = appSlice.actions;

export default appSlice.reducer;

export const fetchLatestImages = (): AppThunk => async (dispatch) => {
  console.log("Fetch latest");
  try {
    const response = await unsplash.get("/photos", {
      params: { page: 1, per_page: 15 },
    });

    dispatch(setLatestImages(response.data));
  } catch (error) {
    dispatch(setLatestImages(null));
  }
};
