import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InputButton from "./InputButton";

const InputSubTask = ({ addSubTask }) => {
  return (
    <Box>
      <InputButton handleSubmit={addSubTask} />
    </Box>
  );
};

export default InputSubTask;
