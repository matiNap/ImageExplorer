import React from "react";
import Lookup from "./components/Lookup";
import "./style.css";
import useSimiliarImages from "../../hooks/useSimiliarImages";
import ImageGrid from "../../components/ImageGrid";

export default (props) => {
  const color = "green";
  const query = "temple";
  const { similarImages, loading } = useSimiliarImages(color, query);
  const photoId = props.match.params.photoId;
  return (
    <div className="photos-container">
      <Lookup {...{ photoId }} />
      <ImageGrid
        images={similarImages}
        {...{ loading }}
        loadImages={() => {}}
      />
    </div>
  );
};
