import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { MAIN } from "../../navRoutes";
import { useTheme } from "@material-ui/core";

interface Props {
  color?: "secondary" | "primary";
}

export default ({ color = "primary" }: Props) => {
  const history = useHistory();
  const { palette } = useTheme();
  const textColor = palette.text[color];
  return (
    <div className="logo-container" onClick={() => history.push(MAIN)}>
      <div>
        <p className="logo-text" style={{ color: textColor }}>
          Image
        </p>
        <p className="logo-sub-text" style={{ color: textColor }}>
          Explorer
        </p>
      </div>
    </div>
  );
};
