import React, { useState } from 'react'
import { Button, Form, Input,DatePicker, message } from "antd";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const { RangePicker } = DatePicker;

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AssignTask = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const[input,setInput] = useState({});

  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput((values)=>({...values,[name]:value}));
    console.log(input);
  }

  const handleSubmit = async() =>{
    let api='https://task-management-system-htjl.onrender.com/admin/assigntask';
    try {
      const response = await axios.post(api,{id:id,...input});
      message.success(response.data);
      navigate("/admindashboard/taskstatus")
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  return (
    <>
    <Form
        id="form"
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        style={{
          maxWidth: 600,
          marginTop:'20px'
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
          label="Title of Task"
          name="tasktitle"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input type='text' name='tasktitle' value={input.tasktitle} onChange={handleInput} placeholder='Title'/>
        </Form.Item>


        <Form.Item
          label='Description'
          name="description"
          rules={[{ required: true, message: "Please input your description!" }]}
        >
         <textarea name="description" id="" rows='4' cols='37' placeholder='Description?' 
         value={input.description} onChange={handleInput}
         ></textarea>
        </Form.Item>

        <Form.Item
          label="Submission"
          name="completion"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input type='number' name='completion' value={input.completion} onChange={handleInput} placeholder='number of days'/>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" style={{ width: "100%" }} onClick={handleSubmit}>
            Assign Task
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default AssignTask