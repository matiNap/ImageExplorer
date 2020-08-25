import React, { ReactNode } from "react";
import "./style.css";

interface Props {
  children: ReactNode;
}
export default ({ children }: Props) => {
  return <div className="main-container">{children}</div>;
};
