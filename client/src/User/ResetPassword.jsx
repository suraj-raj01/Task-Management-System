import React, { useEffect } from 'react'
import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import API from '../Config';

const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

const ResetPassword = () => {
    const navigate = useNavigate();
    const[input,setInput] = useState({});
    const[isVisible,setIsVisible] = useState(true);

    const handleInput=(e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setInput((values)=>({...values,[name]:value}));
    }

    const handleSubmit=async()=>{
        let api = `${API}/employee/resetpassword`;
        try {
          const response = await axios.post(api,input);
          message.success(response.data);
          navigate("/home")
        } catch (error) {
          message.error(error.response.data);
        }
    }

    useEffect(()=>{
      setTimeout(()=>{
        setIsVisible(false);
      },1000)
      setIsVisible(true);
    },[])

  return (
    < >
    {isVisible?(
      <center style={{color:'#1677ff',marginTop:'150px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" height='60px'/>
     </center>
    ):(
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
      <b>Reset Password</b>
      <br />
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
          placeholder='enter your email'
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
          placeholder='enter your old password'
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
          placeholder='enter your new password'
        />
      </Form.Item>
      <div id="home-btn">
        <Button
        id="loginbtn"
          type="primary"
          onClick={handleSubmit}
          style={{ width: "100%"}}
        >
          Reset Password
        </Button>
      </div>
      </Form>
    )}
    </>
  )
}

export default ResetPassword