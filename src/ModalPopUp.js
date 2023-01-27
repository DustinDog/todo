import { Box, Button, Input, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import InputButton from "./InputButton";

const ModalPopUp = ({
  edit,
  open,
  setOpen,
  defaultValue,
  addSubTask,
  subTasks = [],
}) => {
  return (
    <Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <InputButton handleSubmit={edit} defaultValue={defaultValue} />
          <Box
            sx={{ display: "flex " }}
            onClick={() => {
              addSubTask(45);
            }}
          >
            <Box>
              <AddIcon fontSize="small" color="warning" />
            </Box>
            <Typography sx={{ color: "grey", fontSize: "20px" }}>
              Add sub-task
            </Typography>
            {subTasks.map((item) => (
              <Typography key={item.id}>{item.title}</Typography>
            ))}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalPopUp;
