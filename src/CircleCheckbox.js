import { Checkbox } from "@mui/material";
import React from "react";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
const CircleCheckbox = ({ todo, setTodo, item }) => {
  const deleteTodo = (id) => {
    setTimeout(() => {
      let newTodo = [...todo].filter((item) => item.id !== id);
      setTodo(newTodo);
    }, 500);
  };
  return (
    <Checkbox
      onClick={() => {
        deleteTodo(item.id);
      }}
      size="small"
      icon={<CircleOutlinedIcon />}
      checkedIcon={<CheckCircleOutlinedIcon />}
      sx={{ padding: "0px 5px 0px 0px", mt: "4px" }}
    ></Checkbox>
  );
};

export default CircleCheckbox;
