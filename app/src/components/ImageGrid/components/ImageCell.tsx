import React, { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Info from "./Info";
import { Image } from "../../../types";

interface Props {
  observerRef: React.Ref<any> | null;

  data: Image;
  isProfile?: boolean;
}

export default ({ data, observerRef, isProfile }: Props) => {
  const {
    urls,
    user,
    links: { download },
    likes,
    color,
    description,
    width,
    height,
  } = data;
  const { username, profile_image } = user;
  const [isLoaded, setIsLoaded] = useState(false);
  const imageHeight = height >= width ? "460px" : "300px";
  return (
    <div className="cell-container" ref={observerRef}>
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        style={{ backgroundColor: color, minHeight: imageHeight }}
        src={urls.regular}
        alt={description}
        className="cell-image"
      />
      <Info
        likes={likes}
        isProfile={isProfile}
        avatarUri={profile_image.small}
        downloadUri={download}
        username={username}
      />
      {!isLoaded && <ImagePlaceholder {...{ color }} />}
    </div>
  );
};
