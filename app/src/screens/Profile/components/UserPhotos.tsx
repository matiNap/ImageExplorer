import React, { useState } from "react";
import ImageGrid from "../../../components/ImageGrid";
import useUserPhotos from "../../../hooks/useUserPhotos";

interface Props {
  userId: string;
}

export default ({ userId }: Props) => {
  const [page, setPage] = useState(0);
  const { images, loading } = useUserPhotos(userId, page);
  return (
    <div>
      <ImageGrid
        isProfile
        {...{ images, loading }}
        loadImages={() => setPage(page + 1)}
      />
    </div>
  );
};
