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
    deleteTodo,
    selectedTodoId,
    setSelectedTodoId,
    addSubTask,
    deleteSubTask,
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
            setSelectedTodoId("");
          }}
        >
          clear all
        </Button>
      </Box>
      <ModalPopUp
        deleteSubTask={deleteSubTask}
        edit={edit}
        setOpen={setOpen}
        open={open}
        defaultValue={
          selectedTodoId
            ? todo.find((element) => element.id === selectedTodoId).title
            : undefined
        }
        addSubTask={addSubTask}
        subTasks={
          selectedTodoId
            ? todo.find((element) => element.id === selectedTodoId).subTasks
            : undefined
        }
        ///problem
      />
      <Box>
        {todo.map((item) => (
          <Box key={item.id} sx={{ display: "flex" }}>
            <CircleCheckbox deleteTodo={deleteTodo} id={item.id} />

            <Typography
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedTodoId(item.id);
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
