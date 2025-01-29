import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom';
const DisplayUser = () => {

  const navigate = useNavigate();
  const[mydata,setMydata] = useState([]);

  const loadData=async()=>{
    let api='http://localhost:8000/admin/displayuser';
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      message.error(error)
    }
    setIsVisible(true)
  }

  useEffect(()=>{
    loadData();
  },[])

  const taskAssign=(id)=>{
    navigate(`/admindashboard/assigntask/${id}`);
  }

  let sno=0;
  const res = mydata.map((key)=>{
    sno++;
    return(
      <>
      <tr>
        <td>{sno}</td>
        <td>{key.empname.toUpperCase()}</td>
        <td>{key.empemail}</td>
        <td>{key.designation}</td>
        <td>
          <Button variant='primary' size='sm' onClick={()=>{taskAssign(key._id)}}><i class="fas fa-plus"></i>&nbsp; Assign Task</Button>
        </td>
      </tr>
      </>
    )
  })

  return (
    <>
    {/* <h1 className='p-2'>DisplayUser</h1> */}
    <div id="search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search employee..."
            className="me-1"
            aria-label="Search"
          />
          <Button size="sm" variant="primary"><i class="fas fa-magnifying-glass"></i> Search</Button>
        </Form>
      </div>

    <div id="display">
    <Table bordered hover responsive striped>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Employee Name</th>
          <th>Employee Id</th>
          <th>Designation</th>
          <th>Assign Task</th>
        </tr>
      </thead>
      <tbody>
      {res}
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default DisplayUser