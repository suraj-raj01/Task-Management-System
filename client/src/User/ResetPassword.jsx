import React from 'react'
import { useState } from "react";
import { Button, Form, Input, message } from "antd";

const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const ResetPassword = () => {
    const [useremail, setUserEmail] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");

    const handleSubmit=()=>{
        console.log(useremail,oldpassword,newpassword);
    }
  return (
    < >
    <Form
        id="form"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        style={{
          maxWidth: 600,
          backgroundColor:'white'
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
          label="Useremail"
          name="useremail"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            name="username"
            value={useremail}
            onChange={(e) => {
              setUserEmail(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="Old Pass"
          name="oldpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="oldpassword"
            value={oldpassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          label="New Pass"
          name="newpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="newpassword"
            value={newpassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ width: "100%"}}
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ResetPassword