import React, { useState } from "react";
import { FiMaximize2, FiMinimize2 } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";
import { IconButton } from "@material-ui/core";

interface Props {
  src: string;
  color: string;
  width: number;
  height: number;
}
export default ({ src, color, width, height }: Props) => {
  const { palette } = useTheme();
  const [maximized, setMaximized] = useState(false);
  const placeHolderWidth = height >= width ? "30vw" : "60vw";
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="photos-image-container">
      <img
        alt="Lookup"
        src={src}
        onLoad={() => setImageLoaded(true)}
        className={`photos-image ? ${maximized ? "photos-image-max" : ""}`}
      />
      {!imageLoaded && (
        <div
          className={`photos-image ? ${maximized ? "photos-image-max" : ""}`}
          style={{
            minWidth: placeHolderWidth,
            minHeight: "80vh",
            backgroundColor: color,
            position: "absolute",
            display: "flex",
          }}
        />
      )}
      <div className="photos-image-highlight-container">
        <div>
          <IconButton
            className="photos-image-resize"
            onClick={() => setMaximized(!maximized)}
          >
            {maximized ? (
              <FiMinimize2 size={35} color={palette.text.secondary} />
            ) : (
              <FiMaximize2 size={35} color={palette.text.secondary} />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};
