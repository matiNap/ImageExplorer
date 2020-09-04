import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@material-ui/core";
import DropdownItem from "./DropdownItem";

const items = [
  {
    value: "",
    label: "Any orientation",
  },
  {
    value: "orientation=portrait",
    label: "Portrait",
  },
  {
    label: "Landscape",
    value: "orientation=landscape",
  },
  {
    label: "Squarish",
    value: "orientation=squarish",
  },
];

export default () => {
  return (
    <Dropdown
      items={items}
      defaultValue="Any orientation"
      valueKey="orientation"
      renderContent={({ setValue }) => {
        return items.map(({ value, label }) => (
          <DropdownItem
            onClick={() => {
              setValue(value);
            }}
          >
            <Typography>{label}</Typography>
          </DropdownItem>
        ));
      }}
    />
  );
};
