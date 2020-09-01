import React, { useState } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Info from "./Info";
import { Image } from "../../../types";
import { useDispatch } from "react-redux";
import { setSelectedImages } from "../../../reducers/appReducer";

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
    id,
  } = data;
  const { username, profile_image } = user;
  const [isLoaded, setIsLoaded] = useState(false);
  const imageHeight = height >= width ? "460px" : "300px";
  const dispatch = useDispatch();
  return (
    <div
      className="cell-container"
      ref={observerRef}
      onClick={() => {
        dispatch(setSelectedImages({ images: [], currentImageId: id }));
      }}
    >
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
