import React from "react";
import { Avatar } from "@material-ui/core";
import { DISABLED } from "../../../theme";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../navRoutes";

interface Props {
  name: string;
  username: string;
  avatarUri: string;
}

export default ({ name, username, avatarUri }: Props) => {
  return (
    <Link to={`${PROFILE}/${username}`} className="lookup-avatar-container">
      <Avatar src={avatarUri} className="lookup-avatar-img" />
      <div className="lookup-avatar-names">
        <p className="lookup-avatar-name">{name}</p>
        <p style={{ color: DISABLED }}>{username}</p>
      </div>
    </Link>
  );
};
