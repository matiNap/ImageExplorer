import React, { useState } from "react";
import ImageGrid from "../../components/ImageGrid";
import Container from "../../components/Container";
import useLatestImages from "../../hooks/useLatestImages";

export default () => {
  const [page, setPage] = useState(0);
  const { loading, images } = useLatestImages(page);
  console.log(images);
  return (
    <Container>
      <ImageGrid
        loadImages={() => {
          setPage(page + 1);
        }}
        {...{ images, loading }}
      />
    </Container>
  );
};
