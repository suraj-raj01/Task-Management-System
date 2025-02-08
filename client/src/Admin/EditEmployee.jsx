import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from "antd";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const EditEmp = () => {
  const navigate = useNavigate();
  const[input,setInput] = useState({});
  const{id} = useParams();
  const[isVisible,setIsvisible] = useState(true);

  const loadData = async()=>{
    let api='https://task-management-system-htjl.onrender.com/admin/editdisplay';
    try {
      const response = await axios.post(api,{id:id});
      setInput(response.data);
      console.log(response.data);
      // navigate("/admindashboard/displayuser")
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      setIsvisible(false);
    },1000)
    setIsvisible(true);
  },[])

  const handleInput=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setInput((values)=>({...values,[name]:value}));
    console.log(input)
  }

  const handleSubmit=async()=>{
    let api='https://task-management-system-htjl.onrender.com/admin/editsave';
    try {
      const response = await axios.post(api,{id:id,...input});
      message.success(response.data);
      navigate("/admindashboard/displayuser");
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  return (
    <>
        {/* <h1>EditEmp</h1> */}

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
         <h5 className='p-3'>Update Employee</h5>
         <Form.Item
           label="Username"
           rules={[{ required: true, message: "Please input your username!" }]}
         >
           <Input name='empname' value={input.empname} onChange={handleInput}/>
         </Form.Item>
 
         <Form.Item
           label="Useremail"
           rules={[{ required: true, message: "Please input your email!" }]}
         >
           <Input type="email" name='empemail' value={input.empemail} onChange={handleInput}/>
         </Form.Item>
 
         <Form.Item
           label={null}
           rules={[{ required: true, message: "Please input your Designation!" }]}
         >
         <select name='designation' style={{width:'100%',padding:'5px',borderRadius:'5px',border:'1px solid #ccc',outline:'none'}} value={input.designation} onChange={handleInput}>
           <option value="">Select Designation</option>
           <option value="Programmer">Programmer</option>
           <option value="Project Manager">Project Manager</option>
           <option value="Team Leader">Team Leader</option>
           <option value="UI/UX Designer">UI/UX Designer</option>
           <option value="Data Analyst">Data Analyst</option>
           <option value="Database Engineer">Database Engineer</option>
           <option value="Backend Developer">Backend Developer</option>
         </select>
         </Form.Item>
 
         <Form.Item label={null}>
           <Button type="primary" onClick={handleSubmit} style={{ width: "100%" }}>
             Create User
           </Button>
         </Form.Item>
       </Form>
       )}
    </>
  )
}

export default EditEmp