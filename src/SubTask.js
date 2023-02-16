import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import InputSubTask from "./InputSubTask";
import CircleCheckbox from "./CircleCheckbox";

const SubTask = ({ subTasks, addSubTask, deleteSubTask }) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex " }}>
      <Box>
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
              <InputSubTask addSubTask={addSubTask} />
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
  );
};

export default SubTask;
