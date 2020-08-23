import React from "react";
import Logo from "../Logo";
import "./style.css";
import { useTheme } from "@material-ui/styles";
import { FiMenu } from "react-icons/fi";
// import { TextField, Avatar, Button } from "@material-ui/core";
import NavigationLink from "../NavigationLink";
import { MAIN, TOPICS } from "../../navRoutes";
import SearchInput from "./components/SearchInput";
// import SignInButton from "../SignInButton";
// import GuestButton from "../GuestButton";

interface Props {
  setHidden: (value: boolean) => void;
}

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
        <NavigationLink to={TOPICS}>Topics</NavigationLink>
        {/* <Avatar alt="Profile" src={BLANK_IMAGE} className="header-avatar" />
        <SignInButton />
        <GuestButton /> */}
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
