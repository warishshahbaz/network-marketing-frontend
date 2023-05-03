import  React, { useState } from "react";
import ImgModal from "./imgModel"
import {  Card, TextField } from "@mui/material";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';




export default function Gallery(img) {
//   const [open, setOpen] = React.useState(false);
//   const[mode,setMode] = useState(false);
//   const [tempImg,setTempImg] = useState('');

//   const getImg = (img)=>{
//     setTempImg(img);
//     setOpen(true);
// setMode(true);
//   }

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};
  return (
    <>
      <div className="w-full h-[50vh] flex justify-center items-center  " >
      <Card sx={{padding:"7px",width:"400px", display:"flex",justifyContent:"center",alignItems:"center", }} >
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button  htmlType="submit" className="w-full ">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
      </Card>
      </div>
      {/* <ImgModal setOpen={setOpen} open={open} tempImg={tempImg} /> */}
    </>
  );
}

const itemData = [
  {
    img: '../gallery/pic-7.jpg',
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-2.jpg",
    title: "Burger",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-3.jpg",
    title: "Camera",
    rows: 1,
    cols: 2,
  },
  {
    img: "../gallery/pic-4.jpg",
    title: "Coffee",
    cols: 2,
    rows:2,
  },
  {
    img: "../gallery/pic-17.jpg",
    title: "Hats",
    cols: 2,
  },
  {
    img: "../gallery/pic-5.jpg",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
   
  },
  {
    img: "../gallery/pic-1.jpg",
    title: "Basketball",
    rows: 2,
  },
  {
    img: "../gallery/pic-6.jpg",
    title: "Fern",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-8.jpg",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "../gallery/pic-9.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-18.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-12.jpg",
    title: "Bike",
    cols: 2,
  },
  {
    img: "../gallery/pic-13.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-15.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-14.jpg",
    title: "Bike",
    cols: 2,
    rows:2
  },
  {
    img: "../gallery/pic-17.jpg",
    title: "Tomato basil",
  },
  {
    img: "../gallery/pic-12.jpg",
    title: "Sea star",
  },
  {
    img: "../gallery/pic-20.jpg",
    title: "Bike",
    cols: 2,
  },
];
