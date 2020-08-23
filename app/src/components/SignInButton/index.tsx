import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";

export default () => {
  return (
    <a style={{ textDecorationLine: "none" }}>
      <Button
        variant="contained"
        color="primary"
        className="auth-button"
        style={{ marginRight: "1rem" }}
      >
        Sign in
      </Button>
    </a>
  );
};
