import React from "react";
// import NavigationLink from "../NavigationLink";
import { useTheme } from "@material-ui/styles";
import { GoChevronLeft } from "react-icons/go";
import "./style.css";
import { SwipeableDrawer } from "@material-ui/core";

interface Props {
  hidden: boolean;
  setHidden: (value: boolean) => void;
}

export default ({ hidden, setHidden }: Props) => {
  const { palette } = useTheme();

  return (
    <div className={`drawer-container`}>
      <SwipeableDrawer
        open={!hidden}
        onClose={() => setHidden(true)}
        onOpen={() => setHidden(false)}
      >
        <div
          className="drawer-content"
          style={{ backgroundColor: palette.secondary.main }}
        >
          <div className="drawer-header">
            <GoChevronLeft
              onClick={() => setHidden(true)}
              size={40}
              color={palette.text.primary}
              className="drawer-hide-icon"
            />
          </div>
          <ul className="drawer-list">
            <li className="drawer-list-item"></li>
            <li className="drawer-list-item"></li>
            <li className="drawer-list-item"></li>
          </ul>
        </div>
      </SwipeableDrawer>
    </div>
  );
};
