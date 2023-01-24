import { Box, Button, Input } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const InputToDo = ({ addTodo }) => {
  const [newText, setNewText] = useState("");
  const handleAddTodo = () => {
    if (newText) {
      addTodo(newText);
      setNewText("");
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTodo();
          }
        }}
        inputRef={(input) => {
          if (input != null) {
            input.focus();
          }
        }}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="Your ToDo"
        sx={{ color: "white", fontSize: "20px" }}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default InputToDo;
