import React from "react";

interface Props {
  type: "squarish" | "portrait" | "landscape" | "none" | string;
}

export default ({ type }: Props) => {
  if (type === "portrait") {
    return <div className="dropdown-mock"></div>;
  } else if (type === "landscape") {
    return <div className="dropdown-mock mock-landscape" />;
  } else if (type === "squarish")
    return <div className="dropdown-mock mock-squarish" />;
  else return <div className="dropdown-mock mock-none" />;
};
