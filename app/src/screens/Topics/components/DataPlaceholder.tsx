import React from "react";
import ContentLoader from "react-content-loader";

export default () => {
  return (
    <ContentLoader
      width="100%"
      height="2.5rem"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="2rem" rx="5" ry="5" width="180" height="10" />
    </ContentLoader>
  );
};
