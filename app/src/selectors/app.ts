import { RootState } from "../store";

export const selectLatestImages = (state: RootState) => state.app.latestImages;
