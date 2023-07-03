import { Box, Button, Grid, Modal, TextField } from "@mui/material";
import { useState } from "react";
import CustomInput from "../../Component/customInput";

const ForgetPassword = () => {
  const [resetEmail, setResetEmail] = useState({ email: "" });
  const InputChange = (event) => {
    let { name, value } = event.target;
    let data = { ...resetEmail };
    data[name] = value;
    setResetEmail(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <Modal
      open
      //   onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "75%",
          height: "75vh",
          bgcolor: "#ffffff",
          p: 4,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomInput
                type={"email"}
                placeholder={"email"}
                name="email"
                value={resetEmail.email}
                required={true}
                onChange={InputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant="contained" type="submit">
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};
export default ForgetPassword;
