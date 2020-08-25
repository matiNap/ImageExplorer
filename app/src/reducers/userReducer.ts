import { createSlice } from "@reduxjs/toolkit";
import { User, Image } from "../types";
import unsplash from "../apis/unsplash";
import { AppThunk } from "../store";

interface UserLoader {
  data: {
    loading: boolean;
    user: User | null;
    error: boolean;
  };
  photos: {
    images: Image[] | null;
    error: boolean;
    loading: boolean;
    page: number;
  };
}

const INIT_STATE: UserLoader = {
  data: {
    user: null,
    error: false,
    loading: true,
  },
  photos: {
    images: null,
    error: false,
    loading: true,
    page: 1,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: INIT_STATE,
  reducers: {
    setUser: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setPhotos: (state, action) => {
      const prevPhotos = state.photos.images ? state.photos.images : [];
      const payloadPhotos = action.payload.images ? action.payload.images : [];
      state.photos = {
        ...state.photos,
        ...action.payload,
        images: [...prevPhotos, ...payloadPhotos],
      };
    },
  },
});

export default userSlice.reducer;

const { setUser, setPhotos } = userSlice.actions;

export const fetchUser = (userId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(setUser({ loading: true }));
    const response = await unsplash.get(`users/${userId}`);

    dispatch(
      setUser({
        loading: false,
        user: response.data,
        error: false,
      })
    );
  } catch (error) {
    dispatch(setUser({ error: true, loading: false }));
  }
};

export const fetchPhotos = (userId: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    const state = getState();
    const {
      user: {
        photos: { page },
      },
    } = state;
    dispatch(setPhotos({ loading: true }));
    const response = await unsplash.get(`users/${userId}/photos`, {
      params: {
        page,
        per_page: 30,
      },
    });
    dispatch(
      setPhotos({
        loading: false,
        images: response.data,
        error: false,
        page: page + 1,
      })
    );
  } catch (error) {
    dispatch(setPhotos({ error: true, loading: false }));
  }
};
