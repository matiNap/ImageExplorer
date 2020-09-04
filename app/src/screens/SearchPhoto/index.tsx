import React from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import Dropdown from "./components/Dropdown";
import { Typography } from "@material-ui/core";
import "./style.css";
import OrientationSort from "./components/OrientationSort";
import ColorSort from "./components/ColorSort";

const items = [{ value: "1", label: "value1" }];

const Content = ({ setValue }) => {
  return items.map((data) => <Typography>{data.value}</Typography>);
};

export default () => {
  const test = { value: 1 };
  const { value } = test;
  return (
    <Container>
      <SearchNav />
      <div>
        <OrientationSort />
        <ColorSort />
      </div>
    </Container>
  );
};
