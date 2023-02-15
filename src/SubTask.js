import { Button } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import InputSubTask from "./InputSubTask";

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
            >
              <AddIcon fontSize="small" color="warning" />
              <Box sx={{ color: "grey", fontSize: "20px" }}>Add sub-task</Box>
            </Box>
          ) : (
            <Box>
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
                {item.title}
                <Button
                  onClick={() => {
                    deleteSubTask(item.id);
                  }}
                >
                  delete
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SubTask;
