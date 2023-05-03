import { AccountCircle, AccountCircleRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";

const Conatct = () => {
  const [contactData, setContactData] = useState({});
  const [inputData, setInputdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  console.log("inputData", inputData);
  const handleSend = async (data) => {
    try {
      let res = await axios.post(
        "http://api.imperialmanagement.in/api/career/contact",
        inputData
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid className=" mb-2 contacts">
      <div className="flex lg:flex-row flex-col ">
        <div>
          <h2>Contact Us</h2>
          <Col>
            {/* <Form action="https://formspree.io/f/mjvznayq"  method="POST" >
          <TextField id="standard-basic" type='text' label="Name" name="name" variant="standard" />
          <TextField id="standard-basic" type='text' label="Email" variant="standard" />
          <TextField id="standard-basic" type='text' label="Phone" variant="standard" />
          <TextField id="standard-basic" type='textarea' label="message" variant="standard" />
            <Button>Send</Button> */}
            <div className="flex flex-col sm:w-[100%] w-[100vw] ">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "4px",
                  width: "100%",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  {/* <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id="input-with-sx"
                    sx={{ width: "100%", padding: "3px" }}
                    required
                    label="Name"
                    // variant="standard"
                    name="name"
                    value={inputData.name}
                    onChange={handleChange}
                    variant="standard"
                  /> */}
                </Box>
                <AccountCircleRounded
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  type="text"
                  sx={{width:"100%",padding:"3px"}}
                  required
                  label="Name"
                  variant="standard"
                  name="name"
                  value={inputData.name }
                  onChange={handleChange}
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <MarkunreadIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  type="text"
                  required
                  label="Phone"
                  variant="standard"
                  sx={{ width: "100%", padding: "3px" }}
                  name="phone"
                  value={inputData.phone}
                  onChange={handleChange}
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <PhoneIphoneIcon
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Email"
                  type="email"
                  required
                  variant="standard"
                  sx={{ width: "100%", padding: "3px" }}
                  name="email"
                  value={inputData.email}
                  onChange={handleChange}
                />
              </Box>
              <Box
                sx={{ display: "flex", alignItems: "flex-end", padding: "4px" }}
              >
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Message"
                  type="textarea"
                  variant="standard"
                  sx={{ width: "100%", padding: "3px" }}
                  name="message"
                  value={inputData.message}
                  onChange={handleChange}
                />
              </Box>
              <Button
                size="medium"
                variant="contained"
                sx={{ marginTop: "12px" }}
                onClick={handleSend}
              >
                Send
              </Button>
            </div>
          </Col>
        </div>

        <Col>
          <img src={"/image/contacts.png"} height={50} alt="contact" />
        </Col>
      </div>
    </Container>
  );
};

export default Conatct;
