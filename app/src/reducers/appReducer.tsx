import { createSlice } from "@reduxjs/toolkit";
import { Image, SingleImage } from "../types";
import { AppThunk } from "../store";
import history from "../history";
import { PHOTOS } from "../navRoutes";
import { fetchPhoto } from "../apis/unsplash";

const INIT_STATE: {
  selected: {
    currentImageId: string;
    images: Image[] | null;
  } | null;
  selectedData: {
    loading: boolean;
    error: boolean;
    data: null | SingleImage;
  };
} = {
  selected: null,
  selectedData: {
    loading: true,
    error: false,
    data: null,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setSelectedImages: (state, action) => {
      history.push(`${PHOTOS}/${action.payload.currentImageId}`);
      state.selected = action.payload;
    },
    setSelectedData: (state, action) => {
      state.selectedData = { ...state.selectedData, ...action.payload };
    },
  },
});

export const { setSelectedImages, setSelectedData } = appSlice.actions;

export default appSlice.reducer;

export const fetchCurrentImages = (imageId: string) => async (dispatch) => {
  dispatch(setSelectedData({ loading: true }));
  try {
    const { data } = await fetchPhoto(imageId);
    dispatch(setSelectedData({ data, loading: false }));
  } catch {
    dispatch(setSelectedData({ error: false }));
  }
};
