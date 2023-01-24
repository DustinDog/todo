import { Box, Button, Input, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import InputButton from "./InputButton";

const ModalPopUp = ({ edit, open, setOpen, defaultValue }) => {
  return (
    <Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box>
          <InputButton handleSubmit={edit} defaultValue={defaultValue} />
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalPopUp;
