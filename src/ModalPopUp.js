import { Box, Button, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputButton from "./InputButton";

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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <InputButton
            handleSubmit={handleSubmit}
            defaultValue={defaultValue}
            setOpen={setOpen}
          />
          <Box sx={{ display: "flex " }}>
            <Box>
              <Box display="flex">
                <AddIcon
                  onClick={() => {
                    addSubTask(45);
                  }}
                  fontSize="small"
                  color="warning"
                />
                <Box
                  onClick={() => {
                    addSubTask(45);
                  }}
                  sx={{ color: "grey", fontSize: "20px" }}
                >
                  Add sub-task
                </Box>
              </Box>

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
      </Modal>
    </Box>
  );
};

export default ModalPopUp;
