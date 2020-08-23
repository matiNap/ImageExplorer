import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestImages } from "../../reducers/appReducer";
import ImageGrid from "../../components/ImageGrid";
import { selectLatestImages } from "../../selectors/app";
import "./style.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {});
  const images = useSelector(selectLatestImages);
  return (
    <div className="main-container">
      <ImageGrid
        loadImages={() => {
          dispatch(fetchLatestImages());
        }}
        {...{ images }}
      />
    </div>
  );
};
