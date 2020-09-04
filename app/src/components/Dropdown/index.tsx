import React, { useState, useMemo } from "react";
import "./style.css";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/styles";

interface Item {
  value: string;
  label: string;
}

interface Props {
  defaultValue: string;
  children: React.ReactNode;
}

export default ({ defaultValue, children }: Props) => {
  const [value, setValue] = useState("");
  const { palette } = useTheme();
  useMemo(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const history = useHistory();
  console.log(history);
  return (
    <div className="dropdown">
      <Typography>{value}</Typography>
      <div
        className="dropdown-content"
        style={{ backgroundColor: palette.secondary.main }}
      >
        {children}
      </div>
    </div>
  );
};
