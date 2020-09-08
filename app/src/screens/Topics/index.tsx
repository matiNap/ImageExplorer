import React from "react";
import Container from "../../components/Container";
import Topic from "./components/Topic";
import "./style.css";
import { useTheme } from "@material-ui/core";

const TOPICS = [
  {
    query: "wallpaper",
    title: "Wallpaper",
  },
  {
    query: "technology",
    title: "Technology",
  },
  {
    query: "nature",
    title: "Nature",
  },
  {
    query: "people",
    title: "People",
  },
  {
    query: "fasion",
    title: "Fashion",
  },
  {
    query: "history",
    title: "History",
  },
  {
    query: "architecture",
    title: "Architecture",
  },
  {
    query: "interior",
    title: "Interiors",
  },
];

export default () => {
  const { palette } = useTheme();
  return (
    <Container>
      <h1>Topics</h1>
      <div
        className="topics-grid"
        style={{ backgroundColor: palette.secondary.main }}
      >
        {TOPICS.map(({ query, title }) => (
          <Topic {...{ query, title }} />
        ))}
      </div>
    </Container>
  );
};
