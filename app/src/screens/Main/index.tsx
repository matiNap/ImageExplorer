import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestImages } from "../../reducers/appReducer";
import ImageGrid from "../../components/ImageGrid";
import { selectLatestImages } from "../../selectors/app";
import Container from "../../components/Container";

export default () => {
  const dispatch = useDispatch();
  const { images, loading } = useSelector(selectLatestImages);
  return (
    <Container>
      <ImageGrid
        loadImages={() => {
          dispatch(fetchLatestImages());
        }}
        {...{ images, loading }}
      />
    </Container>
  );
};
