import { createSlice } from "@reduxjs/toolkit";
import { Image } from "../types";
import { AppThunk } from "../store";
import unsplash from "../apis/unsplash";

interface User {
  acces_token: string;
  token_type: string;
  scope: string;
  created_at: number;
}

const IMAGES_PER_PAGE = 30;
interface ImageLoader {
  images: Image[] | null;
  page: number;
  loading: boolean;
  error: boolean;
}

const INIT_STATE: {
  latestImages: ImageLoader;
} = {
  latestImages: {
    images: null,
    page: 1,
    loading: false,
    error: false,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setLatestImages: (state, action) => {
      const latestImages = state.latestImages.images
        ? state.latestImages.images
        : [];
      const payloadImages = action.payload.images ? action.payload.images : [];
      state.latestImages = {
        ...state.latestImages,
        ...action.payload,
        images: [...latestImages, ...payloadImages],
      };
    },
  },
});

const { setLatestImages } = appSlice.actions;

export default appSlice.reducer;

export const fetchLatestImages = (): AppThunk => async (dispatch, getState) => {
  const state = getState();

  try {
    dispatch(setLatestImages({ loading: true }));
    const { page } = state.app.latestImages;
    const { data } = await unsplash.get("/photos", {
      params: {
        page,
        per_page: IMAGES_PER_PAGE,
      },
    });

    dispatch(
      setLatestImages({
        images: data,
        page: page + 1,
        per_page: 15,
        loading: false,
      })
    );
  } catch (error) {
    dispatch(setLatestImages({ error: true }));
  }
};
