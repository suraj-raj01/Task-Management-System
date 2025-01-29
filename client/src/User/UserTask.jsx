import React, {useState, useEffect } from 'react'
import Table from "react-bootstrap/Table"
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button"
import axios from 'axios'
import { message } from 'antd'
const UserTask = () => {
  const navigate = useNavigate();
  const[mydata,setMydata] = useState({});

  const loadData=async()=>{
    let api='http://localhost:8000/admin/displayusertask';
    try {
      const response = await axios.post(api,{Id:localStorage.getItem("empid")});
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  useEffect(()=>{
    loadData();
  },[])


  return (
    <>
        <div id="usertask">
        {/* <Table striped hover responsive bordered>
            <thead>
                <tr>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>DeadLine</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
              <tr>
              <td>{mydata.tasktitle}</td>
              <td>{mydata.description}</td>
              <td>{mydata.completiondays}</td>
              <td></td>
              </tr>
            </tbody>
        </Table> */}

        <b>Task Title </b>
        <p>{mydata.tasktitle}</p>
        
        <b>Task Description</b>
        <p>{mydata.description}</p>

        <b>Completion Days</b>
        <p>{mydata.completiondays}{" Days"}</p>

          <br />
          <div style={{display:'flex',gap:'10px'}}>
            <Button size='sm' variant='success'><i class="fas fa-circle-check"></i> Completed</Button>
            <Button size='sm' variant='warning'><i class="far fa-hourglass"></i> Partially Complete</Button>
            <Button size='sm' variant='danger'><i class="fas fa-circle-xmark"></i> Not Complete</Button>
          </div>

        </div>
        <br />
    </>
  )
}

export default UserTask