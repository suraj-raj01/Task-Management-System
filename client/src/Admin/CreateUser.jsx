import React, { useState } from 'react'
import { Button, Form, Input, message } from "antd";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const CreateUser = () => {
  const navigate = useNavigate();
  const[input,setInput] = useState({});

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((values)=>({...values,[name]:value}));
  }

  const handleSubmit = async()=>{
    let api='http://localhost:8000/admin/usersave';
    try {
      const response = await axios.post(api,input);
      console.log(response.data);
      message.success("employee created!!");
      navigate("/admindashboard/displayuser")
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  return (
    <>
        {/* <h1>CreateUser</h1> */}

        <Form
        id="form"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        style={{
          maxWidth: 600,
          backgroundColor:'white',
          marginTop:'10px'
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h5 className='p-3'>Create new Employee</h5>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input name='username' value={input.username} onChange={handleInput}/>
        </Form.Item>

        <Form.Item
          label="Useremail"
          name="useremail"
          type="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input name='useremail' value={input.useremail} onChange={handleInput}/>
        </Form.Item>

        <Form.Item
          label={null}
          name="text"
          rules={[{ required: true, message: "Please input your Designation!" }]}
        >
        <select name="designation" style={{width:'100%',padding:'5px',borderRadius:'5px',border:'1px solid #ccc',outline:'none'}} value={input.designation} onChange={handleInput}>
          <option value="">Select Designation</option>
          <option value="Programmer">Programmer</option>
          <option value="Project Manager">Project Manager</option>
          <option value="Team Leader">Team Leader</option>
          <option value="UI/UX Designer">UI/UX Designer</option>
          <option value="Data Analyst">Data Analyst</option>
        </select>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" onClick={handleSubmit} style={{ width: "100%" }}>
            Create Employee
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateUser