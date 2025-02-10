import React, { useState } from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import bgimg from "../images/backgroundimg.png"

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Home = () => {
  const navigate = useNavigate();

  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const handleSubmit = async () => {
    let api = "https://task-management-system-v9oz.onrender.com/admin/adminlogin";
    let user_api = "https://task-management-system-v9oz.onrender.com/employee/userlogin";
    if (userType == "admin") {
      try {
        const response = await axios.post(api, {
          userid: userid,
          password: password,
        });

        if (response.status == 400) {
          message.error(response.data.msg);
        } else {
          message.success("Login Successfull!!");
          localStorage.setItem("admin", response.data.username);
          localStorage.setItem("adminId", response.data.userid);
          localStorage.setItem("adminPass", response.data.password);
          navigate("/admindashboard");
        }
      } catch (error) {
        message.error(error.response.data.msg);
      }
    } else if (userType == "employee") {
      try {
        const response = await axios.post(user_api, {
          userid: userid,
          password: password,
        });
        if (response.status == 400) {
          message.error(response.data.msg);
        } else {
          message.success(`Welcome ${response.data.empname.toUpperCase()} !!`);
          localStorage.setItem("employee", response.data.empname);
          localStorage.setItem("employeeid", response.data.empemail);
          localStorage.setItem("designation", response.data.designation);
          localStorage.setItem("empPass", response.data.password);
          localStorage.setItem("empid", response.data._id);
          navigate("/userdashboard");
        }
      } catch (error) {
        message.error(error.response.data.msg);
      }
    } else {
      message.error("Please fill input fields!!");
    }
  };


  return (
    <div id='home'>
      <h6
        className="text-start "
        style={{
          backgroundColor: "#1677ff",
          color: "white",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {/* <i class="fas fa-bars"></i> Menu */}
      </h6>
      {/*  */}

      <br />
      <br />
      <Form
        id="form"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <br />
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            type="email"
            name="username"
            value={userid}
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>

        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Form.Item>
            <select
              id="select"
              value={userType}
              onChange={(e) => {
                setUserType(e.target.value);
              }}
            >
              <option value="">LogIn option</option>
              <option name="admin" value="admin">
                Admin
              </option>
              <option name="employee" value="employee">
                Employee
              </option>
            </select>
          </Form.Item>
        </div>

         <div id="home-btn">
         <Button
           id="loginbtn"
            type="primary"
            size="sm"
            onClick={handleSubmit}
          >
            LogIn
          </Button>
         </div>
      </Form>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
