import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import ColorDropdown from "./components/ColorDropdown";
import OrientationDropdown from "./components/OrientationDropdown";
import "./style.css";
import SortDropdown from "./components/SortDropdown";
import { useHistory } from "react-router-dom";
import { searchPhotos } from "../../apis/unsplash";
import * as qs from "qs";
import ImageGrid from "../../components/ImageGrid";
import { DISABLED } from "../../theme";
import { Image } from "../../types";

const renderInfoPlaceholder = (images: null | any[], error: boolean) => {
  if (images && images.length === 0) {
    return (
      <div className="error-placeholder-container">
        <h1 style={{ color: DISABLED }}>Can not find matching photos</h1>
      </div>
    );
  } else if (error)
    return (
      <div className="error-placeholder-container">
        <h1 style={{ color: DISABLED }}>Something went wrong</h1>
      </div>
    );
  else return null;
};

export default () => {
  const {
    location: { search },
  } = useHistory();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setError(false);
    searchPhotos(qs.parse(search, { ignoreQueryPrefix: true }), page)
      .then(({ data }) => {
        setLoading(false);
        setImages([...images, ...data.results]);
      })
      .catch(() => {
        setError(true);
      });
  }, [search, page, images]);

  return (
    <Container>
      <SearchNav />
      <div className="dropdown-dashboard">
        <OrientationDropdown />
        <ColorDropdown />
        <SortDropdown />
      </div>
      {!error && (
        <ImageGrid
          images={images}
          loading={loading}
          loadImages={() => {
            setPage(page + 1);
          }}
        />
      )}
      {renderInfoPlaceholder(images, error)}
    </Container>
  );
};
