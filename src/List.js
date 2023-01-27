import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import ModalPopUp from "./ModalPopUp";

import CircleCheckbox from "./CircleCheckbox";

import InputButton from "./InputButton";
import useTodo from "./useTodo";
export const List = () => {
  const [open, setOpen] = useState(false);

  const {
    todo,
    setTodo,
    addTodo,
    edit,
    selectedTodo,
    setSelectedTodo,
    addSubTask,
  } = useTodo();
  const handleAddTodo = (newText) => {
    if (newText) {
      addTodo(newText);
    }
  };
  return (
    <Box
      sx={{
        width: "800px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <InputButton handleSubmit={handleAddTodo} placeholder="YourTodo" />
        <Button
          onClick={() => {
            setTodo([]);
          }}
        >
          clear all
        </Button>
      </Box>
      <ModalPopUp
        edit={edit}
        setOpen={setOpen}
        open={open}
        defaultValue={selectedTodo.title}
        addSubTask={addSubTask}
        subtasks={selectedTodo.subTasks}
        ///problem
      />
      <Box>
        {todo.map((item) => (
          <Box key={item.id} sx={{ display: "flex" }}>
            <CircleCheckbox todo={todo} setTodo={setTodo} item={item} />

            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedTodo(item);
                setOpen(true);
              }}
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
