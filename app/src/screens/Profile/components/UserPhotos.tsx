import React from "react";
import ImageGrid from "../../../components/ImageGrid";
import { useSelector, useDispatch } from "react-redux";
import { selectPhotos } from "../../../selectors/user";
import { fetchPhotos } from "../../../reducers/userReducer";

interface Props {
  userId: string;
}

export default ({ userId }: Props) => {
  const { images, loading } = useSelector(selectPhotos);
  const dispatch = useDispatch();
  return (
    <div>
      <ImageGrid
        isProfile
        {...{ images, loading }}
        loadImages={() => {
          dispatch(fetchPhotos(userId));
        }}
      />
    </div>
  );
};
