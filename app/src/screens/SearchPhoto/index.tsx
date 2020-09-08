import React, { useState } from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import ColorDropdown from "./components/ColorDropdown";
import OrientationDropdown from "./components/OrientationDropdown";
import "./style.css";
import SortDropdown from "./components/SortDropdown";
import { useHistory } from "react-router-dom";
import * as qs from "qs";
import ImageGrid from "../../components/ImageGrid";
import { DISABLED } from "../../theme";
import useSearchPhotos from "../../hooks/useSearchPhotos";

const renderInfoPlaceholder = (
  images: null | any[],
  error: boolean,
  loading: boolean
) => {
  if (images && images.length === 0 && !loading) {
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
  const [page, setPage] = useState(0);

  const { images, loading, error } = useSearchPhotos(
    qs.parse(search, { ignoreQueryPrefix: true }),
    page
  );

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
      {renderInfoPlaceholder(images, error, loading)}
    </Container>
  );
};
