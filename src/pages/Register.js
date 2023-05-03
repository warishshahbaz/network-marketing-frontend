import { Typography } from "@mui/material";
import {
  AutoComplete,
  Button,
  Card,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
} from "antd";
import { useState } from "react";
import OTPInput from "react-otp-input";
import Timer from "../components/Timer";
import axios from "axios";
const { Option } = Select;
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = () => {
  const [sponcerToggle, setSponcerToggle] = useState(false);
  const [otpMobNo, setOtpMobNo] = useState("");
  const [sponcerId, setSponcerId] = useState("");
  const [errorHandle, setErrorHandle] = useState(false);
  const [otpErrorMsg, setOtpErrorMsg] = useState("Enter Varifaction Code");
  const [otp, setOtp] = useState("");
  const [varifaction_code_id, setVarifaction_code_id] = useState("");
  const [otpToggle, setOtpToggle] = useState(false);
  const [registerObj, setRegisterObj] = useState({});
  const [timer, setTimer] = useState(90);
  const [seconds, setSeconds] = useState(90);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
    setRegisterObj(values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const getVarifactionCode = () => {
    if (registerObj?.phone) {
      console.log(registerObj.phone);
      setOtpMobNo(registerObj.phone);
      axios
        // .post("http://localhost:8080/api/user/get_varifaction_code", {
        .post(
          "https://network-marketing-backend.onrender.com/api/user/get_varifaction_code",
          {
            phone: registerObj.phone,
          }
        )
        .then((result) => {
          console.log(result.data);

          setVarifaction_code_id(result.data?.varifaction_code_id);
          setOtpToggle(true);
        })
        .catch((error) => {
          console.log(error.response.data);
          setErrorHandle(true);
        });
    }
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };
  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const setSponcerIdHandler = (e) => {
    setErrorHandle(false);
    setSponcerId(e.target.value);
  };

  const submitSponcerHandler = () => {
    console.log("Received SponcerId Handler : ", sponcerId);
    if (sponcerId != "") {
      axios
        // .post("http://localhost:8080/api/user/valid_sponcer_id", {
        .post(
          "https://network-marketing-backend.onrender.com/api/user/valid_sponcer_id",
          {
            refer_sponcer_id: sponcerId,
          }
        )
        .then((result) => {
          console.log(result.data);
          setSponcerToggle(true);
        })
        .catch((error) => {
          setErrorHandle(true);
        });
    }
  };
  const resendOtp = () => {
    setSeconds(90);
    getVarifactionCode();
  };

  const handleRegister = () => {
    axios
      // .post("http://localhost:8080/api/user/verify_varifaction_code", {
      .post(
        "https://network-marketing-backend.onrender.com/api/user/verify_varifaction_code",
        {
          varifaction_code: Number(otp),
          varifaction_code_id: varifaction_code_id,
        }
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        setOtpErrorMsg(error.response.data?.message);
      });
    console.log("registerObj", registerObj, { otp }, varifaction_code_id);
  };
  return (
    <div className="w-full flex justify-center items-center  min-h-[100vh] bg-[#ffd6e7] ">
      <Card style={{ boxShadow: "20px" }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          initialValues={{
            residence: ["zhejiang", "hangzhou", "xihu"],
            prefix: "86",
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          scrollToFirstError
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          {!sponcerToggle ? (
            <>
              <h3 className="text-center mb-3 text-[green] ">
                Verify Sponcer ID
              </h3>
              <div className=" w-[100%] min-w-[400px] h-[40px] flex justify-around  content-start ">
                <Form.Item
                  name="sponcer_id"
                  label=<h6 className="mb-2 font-med">Sponcer ID :</h6>
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Sponcer ID !",
                    },
                    {
                      required: true,
                      message: (
                        <p className="w-[200px]  ml-[8px] flex ">
                          Please fill your Sponcer ID !
                        </p>
                      ),
                    },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="primary"
                    className="w-[170px] ml-2"
                    onChange={setSponcerIdHandler}
                  />
                </Form.Item>

                <Button
                  onClick={submitSponcerHandler}
                  className="bg-[blue] text-white mb-4 "
                  htmlType="submit"
                >
                  Verify
                </Button>
              </div>
              {errorHandle && (
                <h5 className="text-[red] ">Invalid Sponcer ID !</h5>
              )}
            </>
          ) : (
            <>
              {" "}
              <h3 className="text-center mb-4 text-[green] ">
                Fill Your Details
              </h3>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  className="w-[190px]"
                  name="name"
                  label="Name"
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Name !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[52px] flex ">
                    //       Please fill your Name !
                    //     </p>
                    //   ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Input className="w-[230px] ml-3 justify-between items-center" />
                </Form.Item>
                <Form.Item
                  name="father_name"
                  label="Father Name"
                  className="w-[380px] "
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Father Name !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[28px] flex ">
                    //       Please fill your Father Name !
                    //     </p>
                    //   ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Input className="w-[230px] ml-2 justify-between items-center" />
                </Form.Item>
              </div>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  className="w-[220px] "
                  name="position"
                  label="Position"
                  rules={[
                    {
                      type: "radio",
                      message: "The input is not valid Position !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[10px] flex ">
                    //       Please choose your Position !
                    //     </p>
                    //   ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Radio.Group className="w-[230px] ml-1 justify-between items-center">
                    <Radio value="Left">Left</Radio>
                    <Radio value="Right">Right</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item
                  name="dob"
                  label="DOB"
                  className="w-[450px] "
                  rules={[
                    {
                      type: "date",
                      message: "The input is not valid DOB !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[100px] flex ">
                    //       Please fill your DOB !
                    //     </p>
                    //   ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Input
                    type="date"
                    className="w-[235px] ml-12 justify-between items-center"
                  />
                </Form.Item>
              </div>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  name="gender"
                  className="w-[220px] "
                  label="Gender"
                  rules={[
                    {
                      type: "radio",
                      message: "The input is not valid Gender !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[22px] flex ">
                    //       Please choose your Gender !
                    //     </p>
                    //   ),
                    // },
                  ]}
                >
                  <Radio.Group className="w-[230px] ml-1 justify-between items-center">
                    <Radio value="male">Male</Radio>
                    <Radio value="female">Female</Radio>
                    <Radio value="other">Other</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item
                  name="email"
                  label="Email"
                  type="email"
                  className="w-[440px] "
                  rules={[
                    {
                      type: "email",
                      message: (
                        <p className="w-[200px]  ml-[65px] flex ">
                          The input is not valid Email !
                        </p>
                      ),
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[90px] flex ">
                    //       Please fill your Email !
                    //     </p>
                    //   ),
                    // },
                  ]}
                  hasFeedback
                >
                  <Input className="w-[235px] ml-10 justify-between items-center" />
                </Form.Item>
              </div>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  name="phone"
                  label="Contact"
                  className="w-[220px] "
                  rules={[
                    {
                      type: "contact",
                      message: "The input is not valid Contact No !",
                    },
                    {
                      required: true,
                      message: (
                        <p className="w-[200px]  ml-[32px] flex ">
                          Please fill your Contact No !
                        </p>
                      ),
                    },
                    {
                      pattern: new RegExp(/^(0|91)?[6-9][0-9]{9}$/),
                      message: (
                        <p className="w-[200px]  ml-[52px] flex ">
                          Invalid Contact No !
                        </p>
                      ),
                    },
                  ]}
                  hasFeedback
                >
                  <Input className="w-[230px] ml-2 justify-between items-center" />
                </Form.Item>

                <Form.Item
                  name="country"
                  label="Country"
                  className="w-[420px] "
                  hasFeedback
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Country !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[60px] flex ">
                    //       Please fill your Country !
                    //     </p>
                    //   ),
                    // },
                  ]}
                >
                  <Input className="w-[235px] ml-6 justify-between items-center" />
                </Form.Item>
              </div>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  name="state"
                  label="State"
                  className="w-[170px] "
                  hasFeedback
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid State !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[60px] flex ">
                    //       Please fill your State !
                    //     </p>
                    //   ),
                    // },
                  ]}
                >
                  <Input className="w-[230px] ml-5 justify-between items-center" />
                </Form.Item>
                <Form.Item
                  name="city"
                  label="City"
                  className="w-[460px] "
                  hasFeedback
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid City !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[90px] flex ">
                    //       Please fill your City !
                    //     </p>
                    //   ),
                    // },
                  ]}
                >
                  <Input className="w-[235px] ml-12 justify-between items-center" />
                </Form.Item>
              </div>
              <div className=" w-[100%]  flex justify-between items-center ">
                <Form.Item
                  name="address"
                  label="Address"
                  className="w-[220px] "
                  rules={[
                    {
                      type: "address",
                      message: (
                        <p className="w-[200px]  ml-[60px] flex ">
                          The input is not valid Address !
                        </p>
                      ),
                    },
                  ]}
                  hasFeedback
                >
                  <Input className="w-[230px] ml-1 justify-between items-center" />
                </Form.Item>
                <Form.Item
                  name="pincode"
                  label="Pincode"
                  className="w-[430px] "
                  hasFeedback
                  rules={[
                    {
                      type: "name",
                      message: "The input is not valid Pincode !",
                    },
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[70px] flex ">
                    //       Please fill your Pincode !
                    //     </p>
                    //   ),
                    // },
                  ]}
                >
                  <Input className="w-[240px] ml-6 justify-between items-center" />
                </Form.Item>
              </div>
              <div className="flex w-[100%] mr-[72px] justify-between items-center">
                <Form.Item
                  name="password"
                  label="Password"
                  className="w-[320px] ml-[12px] "
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[15px] flex ">
                    //       Please confirm your password !
                    //     </p>
                    //   ),
                    // },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match !"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password className="w-[230px] mr-[64px] " />
                </Form.Item>

                <Form.Item
                  name="confirm_password"
                  label="Confirm Password"
                  className="w-[380px]   "
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    // {
                    //   required: true,
                    //   message: (
                    //     <p className="w-[200px]  ml-[50px] flex ">
                    //       Please confirm your password !
                    //     </p>
                    //   ),
                    // },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match !"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    style={{ width: "250px", marginLeft: "23px" }}
                  />
                </Form.Item>
              </div>
              <div className="flex w-[100%] justify-center items-center ">
                <Button
                  className={`bg-[blue] text-white mt-3 ${
                    otpToggle ? "hidden" : "block"
                  } `}
                  onClick={getVarifactionCode}
                  htmlType="submit"
                >
                  Get Verifaction Code
                </Button>
              </div>
            </>
          )}
        </Form>
        {otpToggle && (
          <div className="flex justify-between items-center w-full flex-col gap-3 mb-[9994px] ">
            <h4 className="text-center mt-[0px] text-[green] ">
              Varifaction code send to{" "}
              <span className="text-[black] text-xl">
                ******{otpMobNo?.substr(6)}
              </span>
            </h4>

            <div className="flex gap-4 ">
              <OTPInput
                value={otp}
                onChange={setOtp}
                inputStyle={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid gray",
                  borderRadius: "6px",
                  gap: 4,
                }}
                numInputs={4}
                renderSeparator={<span className="mr-4 "> </span>}
                renderInput={(props) => <input {...props} />}
              />
              <Timer setSeconds={setSeconds} seconds={seconds} />
            </div>

            <div className="flex justify-between items-center w-full flex-col gap-3 mr-6">
              <h5 className="text-[red]">{otpErrorMsg}</h5>
            </div>
            <div className="flex justify-between gap-3 mr-8">
              <Button
                className="bg-[blue] text-white mb-4"
                htmlType="submit"
                onClick={resendOtp}
              >
                Resend code
              </Button>

              <Button
                {...tailFormItemLayout}
                onClick={handleRegister}
                className="bg-[blue] text-white "
                htmlType="submit"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
export default Register;
