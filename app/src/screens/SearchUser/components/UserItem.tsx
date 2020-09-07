import React from "react";
import { Avatar, Typography, useTheme } from "@material-ui/core";
import { User } from "../../../types";
import { DISABLED } from "../../../theme";

import { FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../navRoutes";

interface Props {
  user: User;
}

export default ({ user }: Props) => {
  const { profile_image, name, username, total_photos } = user;
  const { palette } = useTheme();
  return (
    <li style={{ backgroundColor: palette.secondary.main }}>
      <Link className="search-user-item" to={`${PROFILE}/${username}`}>
        <Avatar src={profile_image.medium} className="search-user-avatar" />
        <div className="search-user-names">
          <Typography>{name}</Typography>
          <Typography style={{ color: DISABLED }} variant="subtitle2">
            {username}
          </Typography>
        </div>
        <div className="search-user-photos">
          <FiCamera size={25} color={DISABLED} />
          <Typography style={{ color: DISABLED, marginLeft: "0.5rem" }}>
            {total_photos}
          </Typography>
        </div>
      </Link>
    </li>
  );
};
