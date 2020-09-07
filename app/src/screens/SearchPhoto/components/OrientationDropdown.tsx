import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@material-ui/core";
import DropdownItem from "./DropdownItem";
import Mock from "./Mock";

const items = [
  {
    value: "",
    label: "Any orientation",
    type: "none",
  },
  {
    value: "orientation=portrait",
    label: "Portrait",
    type: "portrait",
  },
  {
    label: "Landscape",
    value: "orientation=landscape",
    type: "landscape",
  },
  {
    label: "Squarish",
    value: "orientation=squarish",
    type: "squarish",
  },
];

export default () => {
  return (
    <Dropdown
      items={items}
      defaultValue="Any orientation"
      valueKey="orientation"
      renderContent={({ setValue }) => {
        return items.map(({ value, label, type }) => (
          <DropdownItem
            onClick={() => {
              setValue(value);
            }}
          >
            <div className="mock-container">
              <Mock type={type} />
            </div>
            <Typography>{label}</Typography>
          </DropdownItem>
        ));
      }}
    />
  );
};
