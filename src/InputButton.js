import { Box, Button, Input } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
const InputButton = ({ handleSubmit, placeholder = "", defaultValue = "" }) => {
  const [newText, setNewText] = useState(defaultValue);
  const onSubmit = () => {
    handleSubmit(newText);
    setNewText("");
  };

  return (
    <Box>
      <Input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSubmit();
          }
        }}
        inputRef={(input) => {
          if (input != null) {
            input.focus();
          }
        }}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder={placeholder}
        sx={{ color: "white", fontSize: "20px" }}
      />
      <Button variant="contained" onClick={onSubmit}>
        <AddIcon />
      </Button>
    </Box>
  );
};

export default InputButton;
