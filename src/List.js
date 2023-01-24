import { Box, Typography } from "@mui/material";
import { useState } from "react";

import ModalPopUp from "./ModalPopUp";

import CircleCheckbox from "./CircleCheckbox";
import { v4 as uuid } from "uuid";
import InputButton from "./InputButton";
export const List = () => {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const handleAddTodo = (newText) => {
    if (newText) {
      addTodo(newText);
    }
  };
  const addTodo = (value) => {
    setTodo([...todo, { id: uuid(), title: value, done: false }]);
  };
  const edit = (value) => {
    const idx = todo.findIndex(({ id }) => selectedTodo.id === id);
    setTodo([
      ...todo.slice(0, idx),
      { ...selectedTodo, title: value },
      ...todo.slice(idx + 1),
    ]);
  };
  console.log(selectedTodo);
  return (
    <Box
      sx={{
        width: "800px",
        height: "600px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <InputButton handleSubmit={handleAddTodo} placeholder="YourTodo" />
      <ModalPopUp
        edit={edit}
        setOpen={setOpen}
        open={open}
        defaultValue={selectedTodo.title}
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
