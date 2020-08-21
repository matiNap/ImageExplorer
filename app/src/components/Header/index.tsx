import React from "react";
import Logo from "../Logo";
import "./style.css";
import { useTheme } from "@material-ui/styles";
import { FiMenu } from "react-icons/fi";
import { TextField, Avatar, Button } from "@material-ui/core";
import NavigationLink from "../NavigationLink";
import { MAIN } from "../../navRoutes";
import SearchInput from "./components/SearchInput";
import SignInButton from "../SignInButton";
import GuestButton from "../GuestButton";

interface Props {
  setHidden: (value: boolean) => void;
}

const BLANK_IMAGE =
  "https://lh3.googleusercontent.com/proxy/VD3bQtyTK7T0YdXxQPNuON9aGIDn8zC5n9m6RJxngOaNhNqSQAIfZr_YfOLiSTBXCXbRylV33n_m0FZ_D9RvTK1TroxIxAApWIzTVWbk7TZl4M37ToV3do_EqOia8K7nPkE1btPhB0VNMMWiXQ";

export default ({ setHidden }: Props) => {
  const { palette } = useTheme();

  return (
    <div
      className="header-container"
      style={{ backgroundColor: palette.secondary.dark }}
    >
      <Logo />
      <SearchInput />
      <div className="header-nav-buttons">
        <NavigationLink to={MAIN}>Home</NavigationLink>
        <NavigationLink to="./topics">Topics</NavigationLink>
        {/* <Avatar alt="Profile" src={BLANK_IMAGE} className="header-avatar" /> */}
        <SignInButton />
        <GuestButton />
      </div>
      <FiMenu
        size={40}
        color={palette.text.primary}
        onClick={() => setHidden(false)}
        className="header-menu-icon"
      />
    </div>
  );
};
