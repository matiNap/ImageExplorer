import React, { useState } from "react";
import Container from "../../components/Container";
import useSearchPhotos from "../../hooks/useSearchPhotos";
import ImageGrid from "../../components/ImageGrid";
import { useHistory } from "react-router-dom";

interface Props {
  match: {
    params: {
      topicName: string;
    };
  };
}

export default ({
  match: {
    params: { topicName },
  },
}: Props) => {
  const [page, setPage] = useState(0);

  const { images, loading } = useSearchPhotos(
    {
      query: topicName,
    },
    page
  );
  return (
    <Container>
      <ImageGrid
        images={images}
        loading={loading}
        loadImages={() => setPage(page + 1)}
      />
    </Container>
  );
};
