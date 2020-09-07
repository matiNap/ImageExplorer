import React from "react";
import "./style.css";
import { useTheme } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import { SEARCH_PHOTOS, SEARCH_USER } from "../../navRoutes";
import useQueryParam from "../../hooks/useQueryParam";
export default () => {
  const { palette } = useTheme();

  const selectedStyle = {
    borderBottom: `3px solid ${palette.primary.main}`,
  };
  const query = useQueryParam();
  const { path } = useRouteMatch();
  return (
    <div className="search-nav-container">
      <Link
        to={`${SEARCH_PHOTOS}?query=${query}`}
        className="search-nav-item"
        style={path === SEARCH_PHOTOS ? selectedStyle : {}}
      >
        <p>Photos</p>
      </Link>
      <Link
        to={`${SEARCH_USER}?query=${query}`}
        className="search-nav-item"
        style={path === SEARCH_USER ? selectedStyle : {}}
      >
        <p>User</p>
      </Link>
    </div>
  );
};
