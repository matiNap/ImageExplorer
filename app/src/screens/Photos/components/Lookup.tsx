import React, { useState } from "react";
import { useTheme } from "@material-ui/styles";
import UserAvatar from "./UserAvatar";
import { FiDownload, FiInfo, FiShare2 } from "react-icons/fi";
import { IconButton } from "@material-ui/core";
import ImageLookup from "./ImageLookup";
import SharePopup from "./SharePopup";
import InfoDialog from "./InfoDialog";

export default () => {
  const { palette } = useTheme();
  const [infoOpened, setInfoOpened] = useState(false);
  return (
    <div className="lookup-container">
      <UserAvatar name="Name" username="username" avatarUri="" />
      <ImageLookup
        src={
          "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
        }
      />
      <div className="lookup-panel">
        <SharePopup />
        <a
          href="https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
          target="_blank"
        >
          <IconButton>
            <FiDownload />
          </IconButton>
        </a>
        <IconButton onClick={() => setInfoOpened(true)}>
          <FiInfo />
        </IconButton>
        <InfoDialog opened={infoOpened} onClose={() => setInfoOpened(false)} />
      </div>
    </div>
  );
};
