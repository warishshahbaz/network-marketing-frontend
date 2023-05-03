import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  minWidth: "300px",
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

// const BASE_URL = "http://localhost:8080";
const BASE_URL = "https://network-marketing-backend.onrender.com/";

export default function JobModal({ setOpen, open }) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFiles] = useState("");
  const [data, setData] = useState({});

  const fetchData = async (resumeFile) => {
    try {
      let res = await axios.post(`${BASE_URL}/api/career/apply`, resumeFile);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(name);
  const submitHandle = async () => {
    if(name || email || phone || file){
      setData(
        {
          name,
          email,
          phone,
          file,
        }
      );
      fetchData(data);
    }
    

    fetchData(data);
  };

  // console.log(data);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ClearIcon
            sx={{ position: "absolute", top: "12px", right: "12px" }}
            onClick={() => setOpen(false)}
          />

          <Typography sx={{ fontSize:"1.4rem",fontWeight:"600" }} id="modal-modal-title" variant="h6" component="h2">
            Apply For
          </Typography>
          <Typography sx={{ color: "yellowgreen",fontSize:"1.2rem" }}>
            Business Associate(BA)
          </Typography>
          <div className="flex flex-col p-4 sm:w-[100%]  justify-center items-center ">
            <FormControl sx={{ marginBottom: "14px",width:"100%" }}>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                id="my-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-describedby="my-helper-text"
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px",width:"100%" }}>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px",width:"100%" }}>
              <InputLabel htmlFor="my-input">Phone Number</InputLabel>
              <Input
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px", width:"100%" }}>
              {/* <InputLabel htmlFor="my-input">Phone Number</InputLabel> */}
              <Input
                type="file"
                id="my-input"
                aria-describedby="my-helper-text"
                value={file}
                onChange={(e) => setFiles(e.target)}
              />
            </FormControl>
            <FormControl sx={{ marginBottom: "14px",width:"100%" }}>
              <Button onClick={submitHandle} variant="contained">
                Apply Here...
              </Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
