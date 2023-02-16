import { Box, Button, Modal } from "@mui/material";

import InputButton from "./InputButton";
import SubTask from "./SubTask";

const ModalPopUp = ({
  edit,
  open,
  setOpen,
  defaultValue,
  addSubTask,
  subTasks = [],
  deleteSubTask,
}) => {
  const handleSubmit = (newText) => {
    edit(newText);
    setOpen(false);
  };
  return (
    <Box>
      <Modal sx={{ left: "400px" }} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <InputButton
            handleSubmit={handleSubmit}
            defaultValue={defaultValue}
            setOpen={setOpen}
          />
          <SubTask
            subTasks={subTasks}
            addSubTask={addSubTask}
            deleteSubTask={deleteSubTask}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalPopUp;
