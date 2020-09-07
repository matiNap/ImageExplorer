import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./style.css";

export default () => {
  return (
    <div className="image-grid-progress">
      <CircularProgress color="primary" size={50} />
    </div>
  );
};
