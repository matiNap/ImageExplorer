import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@material-ui/core";
import DropdownItem from "./DropdownItem";
import { DISABLED } from "../../../theme";

const items = [
  {
    label: "Any color",
    value: "",
    color: null,
  },
  {
    label: "Black and white",
    value: "color=black_and_white",
    color: null,
  },
  {
    label: "Black",
    value: "color=black",
    color: "#2f2f2f",
  },
  {
    label: "White",
    value: "color=white",
    color: "#f2f2f2",
  },
  {
    label: "Blue",
    value: "color=blue",
    color: "#4996f4",
  },
  {
    label: "Red",
    value: "color=red",
    color: "#db4129",
  },
  {
    label: "Green",
    value: "color=green",
    color: "#36ed54",
  },
  {
    label: "Yellow",
    value: "color=yellow",
    color: "#eddd31",
  },
  {
    label: "Orange",
    value: "color=orange",
    color: "#f4aa16",
  },
  {
    label: "Purple",
    value: "color=purple",
    color: "#b53be5",
  },
  {
    label: "Magenta",
    value: "color=magenta",
    color: "#ff0090",
  },
  {
    label: "Teal",
    value: "color=teal",
    color: "#008080",
  },
];

export default () => {
  return (
    <Dropdown
      defaultValue="Any color"
      valueKey="color"
      items={items}
      renderContent={({ setValue }) => {
        return items.map(({ value, label, color }) => (
          <DropdownItem
            onClick={() => {
              setValue(value);
            }}
          >
            <div
              style={{
                backgroundColor: color ? color : "transparent",
                border: color ? `1px solid ${DISABLED}` : "none",
              }}
              className="color-presentation"
            />
            <Typography>{label}</Typography>
          </DropdownItem>
        ));
      }}
    />
  );
};
