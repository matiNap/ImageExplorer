import React from "react";
import { Avatar, Typography, useTheme } from "@material-ui/core";
import { User } from "../../../types";
import { DISABLED } from "../../../theme";

interface Props {
  user: User;
}

export default ({ user }: Props) => {
  const { profile_image, name, username } = user;
  const { palette } = useTheme();
  return (
    <li
      className="search-user-item"
      style={{ backgroundColor: palette.secondary.main }}
    >
      <Avatar src={profile_image.medium} className="search-user-avatar" />
      <div className="search-user-names">
        <Typography>{name}</Typography>
        <Typography style={{ color: DISABLED }} variant="subtitle2">
          {username}
        </Typography>
      </div>
    </li>
  );
};
