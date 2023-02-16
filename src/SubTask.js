import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CircleCheckbox from "./CircleCheckbox";
import InputButton from "./InputButton";

const SubTask = ({ subTasks, addSubTask, deleteSubTask }) => {
  const [open, setOpen] = useState(true);
  return (
    <Box>
      <Box sx={{ display: "grid", gap: "20px" }}>
        <Box display="flex" sx={{ cursor: "pointer" }}>
          {open ? (
            <Box
              display="flex"
              onClick={() => {
                setOpen(!open);
              }}
              sx={{
                animation: "fadeIn 0.3s",
                "@keyframes fadeIn": {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                },
              }}
            >
              <AddIcon fontSize="small" color="warning" />
              <Box sx={{ color: "grey", fontSize: "20px" }}>Add sub-task</Box>
            </Box>
          ) : (
            <Box
              sx={{
                border: "1px solid #b3b3b3",
                borderRadius: "10px",
                animation: "fadeOut 0.4s",
                "@keyframes fadeOut": {
                  from: { opacity: 0 },
                  to: { opacity: 1 },
                },
              }}
            >
              <InputButton placeholder="Subtask" handleSubmit={addSubTask} />
              <Button
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Cancel
              </Button>
            </Box>
          )}
        </Box>
        <Box>
          {subTasks.length ? (
            <Typography>Sub-tasks {subTasks.length}</Typography>
          ) : null}

          <Box sx={{ pl: "20px" }}>
            {subTasks.map((item) => (
              <Box key={item.id}>
                <Box>
                  <CircleCheckbox deleteTodo={deleteSubTask} id={item.id} />
                  {item.title}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubTask;
