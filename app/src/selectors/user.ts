import { RootState } from "../store";

export const selectUser = (state: RootState) => state.user.data;
export const selectPhotos = (state: RootState) => state.user.photos;
