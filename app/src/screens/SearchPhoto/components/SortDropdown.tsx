import React from "react";
import Dropdown from "./Dropdown";
import { Typography } from "@material-ui/core";
import DropdownItem from "./DropdownItem";

const items = [
  {
    value: "order_by=relevant",
    label: "Relevence",
  },
  {
    value: "order_by=latest",
    label: "Newest",
  },
];

export default () => {
  return (
    <Dropdown
      items={items}
      defaultValue="Relevence"
      valueKey="order_by"
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
