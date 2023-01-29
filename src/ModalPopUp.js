import { Box, Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputButton from "./InputButton";

const ModalPopUp = ({
  edit,
  open,
  setOpen,
  defaultValue,
  addSubTask,
  subTasks = [],
}) => {
  return (
    <Box>
      <Modal sx={{ left: "400px" }} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <InputButton
            handleSubmit={edit}
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
                  <Box>{item.title}</Box>
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
