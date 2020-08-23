import React from "react";
// import { useTheme } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./style.css";
import { MAIN } from "../../navRoutes";

export default () => {
  const history = useHistory();
  return (
    <div className="logo-container" onClick={() => history.push(MAIN)}>
      <div>
        <p className="logo-text">Image</p>
        <p className="logo-sub-text">Explorer</p>
      </div>
    </div>
  );
};
