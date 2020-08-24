import React from "react";
import {
  Avatar,
  useTheme,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import { FiDownload } from "react-icons/fi";

interface Props {
  downloadUri: string;
  username: string;
  avatarUri: string;
}

export default ({ downloadUri, username, avatarUri }: Props) => {
  const { palette } = useTheme();
  return (
    <div className="image-grid-info">
      <div className="info-container">
        <div className="info-header">
          <Avatar className="info-avatar" src={avatarUri} />
          <Typography color="secondary">{username}</Typography>
        </div>
        <div className="info-footer">
          <a href={downloadUri}>
            <IconButton aria-label="download" className="info-download">
              <FiDownload color={palette.text.secondary} />
            </IconButton>
          </a>
        </div>
      </div>
    </div>
  );
};
