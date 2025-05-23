import { message } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table"
import Button from "react-bootstrap/Button"
import { useNavigate } from 'react-router-dom';
import API from '../Config';
const DeleteEmployee = () => {

  const navigate = useNavigate();
  const[mydata,setMydata] = useState([]);
  const[isVisible,setIsVisible] = useState(true)
  
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
      setIsVisible(false)
    },800)
    setIsVisible(true)
  },[])
  
  const deleteEmp=async(id)=>{
    let api = `${API}/admin/deleteuser`;
    try {
        const response = await axios.post(api,{id:id})
        message.success("Employee deleted successfully !!")
        loadData();
    } catch (error) {
        message.error(error.response.data.msg);
    }
  }

  const editEmp=(id)=>{
    navigate(`/admindashboard/editemp/${id}`);
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
        <td style={{display:'flex',gap:'10px',justifyContent:'center'}}>
          <Button variant='primary' size='sm' onClick={()=>{editEmp(key._id)}}><i class="fas fa-square-pen"></i>&nbsp; Edit</Button>
          <Button disabled variant='danger' size='sm' onClick={()=>{deleteEmp(key._id)}}><i class="fas fa-trash"></i>&nbsp; Delete</Button>
        </td>
      </tr>
      </>
    )
  })

  return (
    <>
    {/* <h1 className='p-2'>DeleteEmployee</h1> */}
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
          <th>Update Employee</th>
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

export default DeleteEmployee