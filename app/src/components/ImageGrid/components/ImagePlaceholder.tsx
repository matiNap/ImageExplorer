import React from "react";

interface Props {
  color: string;
}

export default ({ color }: Props) => {
  return (
    <div
      className="image-placeholder-container"
      style={{ backgroundColor: color, minHeight: "300px" }}
    ></div>
  );
};
