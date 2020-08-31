import React, { useState } from "react";
import { Popper, Paper, Typography, Fade, IconButton } from "@material-ui/core";
import { FiShare2 } from "react-icons/fi";
import { useTheme } from "@material-ui/styles";

export default () => {
  const [anchor, setAnchor] = useState<any>(null);
  const [opened, setOpened] = useState(false);
  const { palette } = useTheme();
  return (
    <div>
      <Popper open={opened} anchorEl={anchor} placement="top-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              style={{ backgroundColor: palette.primary.main }}
              className="share-popup"
            >
              <Typography color="secondary">Copied URL!</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <IconButton
        onClick={(e) => {
          setAnchor(e.currentTarget);
          setOpened(true);
          setTimeout(() => setOpened(false), 1000);
        }}
      >
        <FiShare2 />
      </IconButton>
    </div>
  );
};
