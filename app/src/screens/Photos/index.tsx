import React from "react";
import Lookup from "./components/Lookup";
import "./style.css";
import useSimiliarImages from "../../hooks/useSimiliarImages";
import ImageGrid from "../../components/ImageGrid";

export default () => {
  const color = "green";
  const query = "temple";
  const { similarImages, loading } = useSimiliarImages(color, query);
  return (
    <div className="photos-container">
      <Lookup />
      <ImageGrid
        images={similarImages}
        {...{ loading }}
        loadImages={() => {}}
      />
    </div>
  );
};
