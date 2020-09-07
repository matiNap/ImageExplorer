import React, { useState, useEffect } from "react";
import { Typography, useTheme } from "@material-ui/core";
import { FiImage } from "react-icons/fi";
import { DISABLED } from "../../../theme";
import { fetchTopicImage } from "../../../apis/unsplash";
import { Link } from "react-router-dom";
import { TOPIC } from "../../../navRoutes";
import DataPlaceholder from "./DataPlaceholder";
import ImagePlaceholder from "./ImagePlaceholder";

interface Props {
  query: string;
  title: string;
}

export default ({ query, title }: Props) => {
  const { palette } = useTheme();
  const [maxImages, setMaxImages] = useState(0);
  const [imageUri, setImageUri] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchTopicImage(query).then(({ data }) => {
      setLoading(false);

      setMaxImages(data.total);
      setImageUri(data.results[0].urls.regular);
    });
  }, [query, title]);
  return (
    <Link to={`${TOPIC}/${query}`}>
      <div
        className="topic-container"
        style={{ backgroundColor: palette.secondary.main }}
      >
        {!loading ? (
          <img alt={title} src={imageUri} className="topic-image" />
        ) : (
          <ImagePlaceholder />
        )}
        <div className="topic-data">
          <Typography className="topic-title">{title}</Typography>

          {!loading ? (
            <div className="topic-data-images">
              <FiImage
                color={DISABLED}
                size={27}
                className="topic-image-icon"
              />
              <p style={{ color: DISABLED }} className="topics-images-text">
                {`${maxImages} contributions`}
              </p>
            </div>
          ) : (
            <DataPlaceholder />
          )}
        </div>
      </div>
    </Link>
  );
};
