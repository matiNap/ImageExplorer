import React from "react";
import { DISABLED } from "../../../theme";

interface Props {
  data: string;
  label: string;
}

export default ({ data, label }: Props) => {
  return (
    <div className="info-dialog-label-container">
      <p
        className="info-dialog-label"
        style={{ color: DISABLED, fontWeight: "bold" }}
      >
        {label}
      </p>
      <p className="info-dialog-label-data">{data}</p>
    </div>
  );
};
