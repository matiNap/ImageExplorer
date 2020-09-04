import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@material-ui/core";
import DropdownItem from "./DropdownItem";

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
            {color && (
              <div
                style={{ backgroundColor: color }}
                className="color-presentation"
              />
            )}

            <Typography>{label}</Typography>
          </DropdownItem>
        ));
      }}
    />
  );
};
