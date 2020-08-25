import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@material-ui/core";
import "./style.css";

interface Props {
  to: string;
  children?: React.ReactNode | string | JSX.Element;
  className?: string;
}

export default ({ to, children, className }: Props) => {
  const { palette } = useTheme();
  const { pathname } = useLocation();
  const selected = pathname === to;
  return (
    <Link
      {...{ to }}
      style={{
        color: Boolean(selected) ? palette.primary.main : palette.text.primary,
        fontWeight: selected ? "bold" : "unset",
      }}
      className={`navigation-link ${className ? className : ""}`}
    >
      {children}
    </Link>
  );
};
