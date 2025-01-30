import React, {useState, useEffect } from 'react'
import Table from "react-bootstrap/Table"
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import { message } from 'antd'
import Form from 'react-bootstrap/Form';
const UserTask = () => {
  const navigate = useNavigate();
  const[mydata,setMydata] = useState([]);
  const[taskstatus,setTaskstatus] = useState("");

  const empid = localStorage.getItem("empid");

  const loadData=async()=>{
    let api='http://localhost:8000/admin/displayusertask';
    try {
      const response = await axios.post(api,{Id:empid});
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  useEffect(()=>{
    loadData();
  },[])

  const handleSubmit = async(id) =>{
    let api='http://localhost:8000/admin/taskstatus';
    try {
      const response = await axios.post(api,{taskstatus:taskstatus,id:id});
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }

  let count=0;
  const res = mydata.map((key)=>{
    count++;
    return(
      <>
      <div id="usertask">
      <div style={{width:'100%',display:'flex',justifyContent:'space-between'}}>
          <span>{count}</span>
          <Button variant="outline-primary" size="sm">{<i class="far fa-circle-check"></i>}{" "}{key.taskstatus}</Button>
          </div>
        <h1></h1>
        <b>Task Title </b>
        <p>{key.tasktitle}</p>
        <b>Task Description</b>
        <p>{key.description}</p>
        <b>Completion Days</b>
        <p>{key.completiondays}{" Days"}</p>

          <div style={{display:'flex',gap:'10px',width:'70%'}}>
            <Form.Select size="sm" name='taskstatus' value={taskstatus} onChange={(e)=>setTaskstatus(e.target.value)}>
              <option selected value=''>Select Task Status</option>
              <option value='Fully Completed'>Fully Complete</option>
              <option value='Partially Completed'>Partial Complete</option>
              <option value='Not Completed'>Not Complete</option>
            </Form.Select>
            {key.empreport==="success"?(
                <Button size='sm' disabled>Submitted</Button>
            ):(<Button size='sm' onClick={()=>{handleSubmit(key._id)}}>Submit</Button>)}
          </div>
        <h3></h3>
      </div>
      </>
    )
  })

  return (
    <>
        <div id="usertasklyt">
          {res}
        </div>
        <br />
    </>
  )
}

export default UserTask