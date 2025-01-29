import React from 'react'
import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from 'axios';
import {useNavigate} from "react-router-dom"

const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const ResetPassword = () => {
    const navigate = useNavigate();
    const[input,setInput] = useState({});

    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setInput((values)=>({...values,[name]:value}));
    }

    const handleSubmit=async()=>{
        let api = 'http://localhost:8000/admin/resetpassword';
        try {
          const response = await axios.post(api,input);
          message.success(response.data);
          navigate("/home")
        } catch (error) {
          message.error(error.response.data);
        }
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
            name="useremail"
            value={input.useremail}
            onChange={handleInput}
          />
        </Form.Item>

        <Form.Item
          label="Old Pass"
          name="oldpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
          type='password'
            name="oldpassword"
            value={input.oldpassword}
            onChange={handleInput}
          />
        </Form.Item>

        <Form.Item
        type='password'
          label="New Pass"
          name="newpassword"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            name="newpassword"
            value={input.newpassword}
            onChange={handleInput}
          />
        </Form.Item>

        <Form.Item label={null}>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ width: "100%"}}
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default ResetPassword