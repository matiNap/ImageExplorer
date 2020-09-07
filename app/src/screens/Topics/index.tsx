import React from "react";
import Container from "../../components/Container";
import Topic from "./components/Topic";
import "./style.css";
import { useTheme } from "@material-ui/core";

export default () => {
  const { palette } = useTheme();
  return (
    <Container>
      <h1>Topics</h1>
      <div
        className="topics-grid"
        style={{ backgroundColor: palette.secondary.main }}
      >
        <Topic query="wallpaper" title="Wallpapers" />
        <Topic query="travel" title="Travel" />
        <Topic query="wallpaper" title="Wallpapers" />
        <Topic query="wallpaper" title="Wallpapers" />
      </div>
    </Container>
  );
};
