import React, { useState } from "react";
import { Modal, Paper } from "@material-ui/core";

interface Props {
  onClose: () => void;
  opened: boolean;
}

export default ({ opened, onClose }: Props) => {
  return (
    <Modal open={opened} {...{ onClose }} className="info-dialog-container">
      <Paper className="info-paper">test</Paper>
    </Modal>
  );
};
