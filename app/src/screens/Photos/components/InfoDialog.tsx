import React, { useState } from "react";
import {
  Modal,
  Paper,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Dialog,
} from "@material-ui/core";
import InfoLabel from "./InfoLabel";
import { DISABLED } from "../../../theme";

interface Props {
  onClose: () => void;
  opened: boolean;
}

export default ({ opened, onClose }: Props) => {
  return (
    <Dialog
      fullWidth={false}
      open={opened}
      onClose={onClose}
      classes={{ container: "info-dialog-content" }}
      className="info-dialog-content"
    >
      <DialogTitle>
        <p style={{ fontWeight: "bold" }}>Info</p>
        <p className="info-dialog-subtitle" style={{ color: DISABLED }}>
          Published at 12 Jun 2016
        </p>
      </DialogTitle>
      <div className="info-content-grid">
        <InfoLabel
          label="Camera Make"
          data="daskljdsalk;djaslk;djalkdajsl;daskd;lasjdalk"
        />
        <InfoLabel label="Camera Model" data="Nikon" />
        <InfoLabel label="Focal Length" data="Nikon" />
        <InfoLabel label="Aperture" data="Nikon" />
        <InfoLabel label="Shutter Speed" data="Nikon" />
        <InfoLabel label="ISO" data="Nikon" />
        <InfoLabel label="Dimensions" data="Nikon" />
        <InfoLabel label="Downloads" data="1468" />
      </div>
    </Dialog>
  );
};
