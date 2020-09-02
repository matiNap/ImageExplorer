import { createSlice } from "@reduxjs/toolkit";
import { Image, SingleImage } from "../types";
import { AppThunk, RootState } from "../store";
import history from "../history";
import { PHOTOS } from "../navRoutes";
import { fetchPhoto, fetchRandomImage } from "../apis/unsplash";
import _ from "lodash";

const INIT_STATE: {
  selectedImages: Image[] | null;
  moving: boolean;
  selectedData: {
    loading: boolean;
    error: boolean;
    data: null | SingleImage;
  };
} = {
  selectedImages: null,
  moving: false,
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
    setSelectedData: (state, action) => {
      state.selectedImages = action.payload.images;
      state.selectedData = { ...state.selectedData, ...action.payload };
    },
    setMoving: (state, action) => {
      state.moving = action.payload;
    },
  },
});

export const { setSelectedData, setMoving } = appSlice.actions;

export default appSlice.reducer;

export const fetchCurrentImage = (
  imageId: string,
  images: Image[] | null
) => async (dispatch) => {
  dispatch(setSelectedData({ loading: true }));
  dispatch(setMoving(true));
  try {
    const { data } = await fetchPhoto(imageId);
    history.push(`${PHOTOS}/${imageId}`);
    dispatch(setSelectedData({ data, loading: false, images }));
    dispatch(setMoving(false));
  } catch {
    dispatch(setSelectedData({ error: false }));
  }
};

const fetchRandomSelectedImages = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setSelectedData({ loading: true }));
    const { data: randomImageData } = await fetchRandomImage();
    const { data } = await fetchPhoto(randomImageData.id);

    dispatch(setSelectedData({ loading: false, data }));
  } catch {
    dispatch(setSelectedData({ error: true }));
  }
};

const getSelected = (state: RootState) => {
  const appState = state.app;
  const currentImages = appState.selectedImages;
  const currentImageId = appState.selectedData.data?.id;

  return { currentImages, currentImageId };
};

export const prevImage = (): AppThunk => async (dispatch, getState) => {
  const { currentImages, currentImageId } = getSelected(getState());

  if (currentImages) {
    const currentIndex = _.findIndex(
      currentImages,
      (image) => currentImageId === image.id
    );
    if (currentIndex !== -1 && currentIndex - 1 > 0) {
      const nextImageId = currentImages[currentIndex - 1].id;

      dispatch(fetchCurrentImage(nextImageId, currentImages));
    }
  } else {
    dispatch(fetchRandomSelectedImages());
  }
};

export const nextImage = (): AppThunk => async (dispatch, getState) => {
  const { currentImages, currentImageId } = getSelected(getState());

  if (currentImages) {
    const currentIndex = _.findIndex(
      currentImages,
      (image) => currentImageId === image.id
    );

    if (currentIndex !== -1 && currentIndex + 1 < currentImages.length) {
      const nextImageId = currentImages[currentIndex + 1].id;

      dispatch(fetchCurrentImage(nextImageId, currentImages));
    } else {
      dispatch(fetchRandomSelectedImages());
    }
  } else {
    dispatch(fetchRandomSelectedImages());
  }
};
