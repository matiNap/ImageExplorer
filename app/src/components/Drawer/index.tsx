import React from "react";
// import NavigationLink from "../NavigationLink";
import { useTheme } from "@material-ui/styles";
import { GoChevronLeft } from "react-icons/go";
import "./style.css";
import { SwipeableDrawer, Avatar } from "@material-ui/core";
import NavigationLink from "../NavigationLink";
import { MAIN, TOPICS } from "../../navRoutes";
// import SignInButton from "../SignInButton";
// import GuestButton from "../GuestButton";
// import { FiLogOut } from "react-icons/fi";

interface Props {
  hidden: boolean;
  setHidden: (value: boolean) => void;
}
const BLANK_IMAGE =
  "https://lh3.googleusercontent.com/proxy/VD3bQtyTK7T0YdXxQPNuON9aGIDn8zC5n9m6RJxngOaNhNqSQAIfZr_YfOLiSTBXCXbRylV33n_m0FZ_D9RvTK1TroxIxAApWIzTVWbk7TZl4M37ToV3do_EqOia8K7nPkE1btPhB0VNMMWiXQ";
export default ({ hidden, setHidden }: Props) => {
  const { palette } = useTheme();
  const signedIn = false;
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
            <div>
              {signedIn && (
                <Avatar
                  alt="Profile"
                  src={BLANK_IMAGE}
                  className="drawer-avatar"
                />
              )}
            </div>
            <GoChevronLeft
              onClick={() => setHidden(true)}
              size={40}
              color={palette.text.primary}
              className="drawer-hide-icon"
            />
          </div>
          <ul className="drawer-list">
            <li>
              <NavigationLink to={MAIN} className="drawer-list-item">
                Home
              </NavigationLink>
            </li>
            <li>
              <NavigationLink to={TOPICS} className="drawer-list-item">
                Topics
              </NavigationLink>
            </li>
            {/* <li style={{ marginTop: "auto" }}>
              {signedIn ? (
                <div className="drawer-footer">
                  <FiLogOut size={35} style={{ color: palette.text.primary }} />
                  <h3 style={{ marginLeft: "1rem" }}>Log out</h3>
                </div>
              ) : (
                <div className="drawer-footer">
                  <SignInButton />
                  <GuestButton />
                </div>
              )}
            </li> */}
          </ul>
        </div>
      </SwipeableDrawer>
    </div>
  );
};
