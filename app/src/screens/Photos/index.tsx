import React from "react";
import Lookup from "./components/Lookup";
import "./style.css";
import useSimiliarImages from "../../hooks/useSimiliarImages";
import ImageGrid from "../../components/ImageGrid";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { Tag } from "../../types";

const getTags = (tags: Tag[] | null) => {
  if (tags && tags.length > 0) return tags[0].title;
  return "";
};

export default (props) => {
  const selectedImage = useSelector(
    (state: RootState) => state.app.selectedData.data
  );
  const color = selectedImage ? selectedImage.color : null;
  const query = selectedImage ? getTags(selectedImage.tags) : null;

  const { similarImages, loading, error } = useSimiliarImages(color, query);
  const photoId = props.match.params.photoId;

  return (
    <div className="photos-container">
      <Lookup {...{ photoId }} />
      {!error && (
        <ImageGrid
          images={similarImages}
          {...{ loading }}
          loadImages={() => {}}
        />
      )}
    </div>
  );
};
