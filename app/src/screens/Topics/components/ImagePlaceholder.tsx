import React from "react";
import ContentLoader from "react-content-loader";

export default () => {
  return (
    <ContentLoader
      width="100%"
      height="20rem"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
    </ContentLoader>
  );
};
