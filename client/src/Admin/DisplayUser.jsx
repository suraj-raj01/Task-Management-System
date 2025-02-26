import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom';
import API from '../Config';
const DisplayUser = () => {

  const navigate = useNavigate();
  const[mydata,setMydata] = useState([]);
  const[isVisible,setIsvisible] = useState(true);

  const loadData=async()=>{
    let api=`${API}/admin/displayuser`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      message.error(error)
    }
  }

  useEffect(()=>{
    loadData();
    setTimeout(()=>{
      setIsvisible(false);
    },800);
    setIsvisible(true);
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
    {/* <div id="search">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search employee..."
            className="me-1"
            aria-label="Search"
          />
          <Button size="sm" variant="primary"><i class="fas fa-magnifying-glass"></i> Search</Button>
        </Form>
      </div> */}

    <div id="display">
    {isVisible?(
      <center style={{color:'#1677ff',marginTop:'50px'}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif" alt="" height='60px'/>
     </center>
    ):(
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
    )}
    </div>
    </>
  )
}

export default DisplayUser