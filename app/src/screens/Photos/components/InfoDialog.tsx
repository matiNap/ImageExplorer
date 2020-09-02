import React from "react";
import { DialogTitle, Dialog } from "@material-ui/core";
import InfoLabel from "./InfoLabel";
import { DISABLED } from "../../../theme";
import { SingleImage } from "../../../types";

interface Props {
  onClose: () => void;
  opened: boolean;
  imageData: SingleImage;
}

export default ({ opened, onClose, imageData }: Props) => {
  const { exif, width, height, created_at, downloads } = imageData;
  const date = new Date(created_at)
    .toISOString()
    .replace(/T/, " ") // replace T with a space
    .replace(/\..+/, "");
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
          {date}
        </p>
      </DialogTitle>
      <div className="info-content-grid">
        <InfoLabel label="Camera Make" data={exif.make} />
        <InfoLabel label="Camera Model" data={exif.model} />
        <InfoLabel label="Focal Length" data={`${exif.focal_length}mm`} />
        <InfoLabel label="Aperture" data={exif.aperture} />
        <InfoLabel label="Shutter Speed" data={`${exif.exposure_time}s`} />
        <InfoLabel label="ISO" data={`${exif.iso}`} />
        <InfoLabel label="Dimensions" data={`${width} x ${height}`} />
        <InfoLabel label="Downloads" data={`${downloads}`} />
      </div>
    </Dialog>
  );
};
