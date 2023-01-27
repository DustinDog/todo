import { Checkbox } from "@mui/material";
import React from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
const CircleCheckbox = ({ deleteTodo, id }) => {
  return (
    <Checkbox
      onClick={() => {
        setTimeout(() => {
          deleteTodo(id);
        }, 500);
      }}
      size="small"
      icon={<CircleOutlinedIcon />}
      checkedIcon={<CheckCircleOutlinedIcon />}
      sx={{ padding: "0px 5px 0px 0px", mt: "4px" }}
    ></Checkbox>
  );
};

export default CircleCheckbox;
