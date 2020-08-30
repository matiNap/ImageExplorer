/* eslint react/jsx-no-target-blank: 0 */

import React from "react";
import { Avatar, useTheme, Typography, IconButton } from "@material-ui/core";
import { FiDownload, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { PROFILE } from "../../../navRoutes";

interface Props {
  downloadUri: string;
  username: string;
  avatarUri: string;
  isProfile?: boolean;
  likes: number;
}

export default ({
  downloadUri,
  isProfile,
  username,
  avatarUri,
  likes,
}: Props) => {
  const { palette } = useTheme();
  return (
    <div className="image-grid-info">
      <div className="info-container">
        <div>
          {!isProfile && (
            <Link to={`${PROFILE}/${username}`}>
              <div className="info-header">
                <Avatar className="info-avatar" src={avatarUri} />
                <Typography color="secondary">{username}</Typography>
              </div>
            </Link>
          )}
        </div>

        <div className="info-footer">
          <div>
            {isProfile && (
              <div className="info-rate">
                <FiHeart color={palette.text.secondary} size={22} />
                <p
                  style={{ color: palette.text.secondary }}
                  className="info-likes"
                >
                  {likes}
                </p>
              </div>
            )}
          </div>
          <a href={downloadUri} target="_blank">
            <IconButton aria-label="download" className="info-download">
              <FiDownload color={palette.text.secondary} />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};
