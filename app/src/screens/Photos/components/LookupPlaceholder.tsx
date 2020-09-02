import React from "react";
import ContentLoader from "react-content-loader";

export default () => {
  return (
    <ContentLoader
      width="100%"
      height="86vh"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="150" y="10" rx="5" ry="5" width="80" height="10" />
      <rect x="150" y="30" rx="5" ry="5" width="100" height="10" />
      <rect x="150" y="50" rx="5" ry="5" width="80" height="10" />

      <circle cx="70" cy="70" r="70" />

      <rect x="5%" y="200" rx="10" ry="10" width="90%" height="90%" />
    </ContentLoader>
  );
};
