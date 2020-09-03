import React from "react";
import "./style.css";
import { useTheme } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { SEARCH_PHOTOS, SEARCH_USER } from "../../navRoutes";
export default () => {
  const { palette } = useTheme();

  const selectedStyle = {
    borderBottom: `3px solid ${palette.primary.main}`,
  };

  const { path } = useRouteMatch();
  return (
    <div className="search-nav-container">
      <Link
        to={SEARCH_PHOTOS}
        className="search-nav-item"
        style={path === SEARCH_PHOTOS ? selectedStyle : {}}
      >
        <p>Photos</p>
      </Link>
      <Link
        to={SEARCH_USER}
        className="search-nav-item"
        style={path === SEARCH_USER ? selectedStyle : {}}
      >
        <p>User</p>
      </Link>
    </div>
  );
};
