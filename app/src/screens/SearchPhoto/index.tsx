import React from "react";
import Container from "../../components/Container";
import SearchNav from "../../components/SearchNav";
import Dropdown from "../../components/Dropdown";
import { Typography } from "@material-ui/core";

const items = [{ value: "1", label: "value1" }];

const Content = ({ setValue }) => {
  return items.map((data) => (
    <Typography onClick={() => setValue(data.value)}>{data.value}</Typography>
  ));
};

export default () => {
  const test = { value: 1 };
  const { value } = test;
  return (
    <Container>
      <SearchNav />
      <div>
        <Dropdown defaultValue={"1"}>
          {items.map((data) => (
            <Typography>{data.value}</Typography>
          ))}
        </Dropdown>
      </div>
    </Container>
  );
};
