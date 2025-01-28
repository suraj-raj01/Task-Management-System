import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const TaskStatus = () => {

  const[mydata,setMydata] = useState([]);

  const loadData=async()=>{
    let api = 'http://localhost:8000/admin/taskstatus';
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  }
  useEffect(()=>{
    loadData();
  },[])

  let sno=0;
  const res = mydata.map((key)=>{
    sno++;
    return(<>
      <tr id="taskstatus">
        <td className="text-center">{sno}</td>
        <td>{key.empid.empemail}</td>
        <td>{key.empid.designation}</td>
        <td>
         <details>
          <summary className="text-center">Show Details</summary>
          <Table bordered hover responsive striped>
            <thead>
              <tr>
                <th>Title</th>
                <th>Descriptionn</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{key.tasktitle}</td>
                <td>{key.description}</td>
                <td style={{textAlign:'center',fontWeight:'bold'}}>{key.completiondays}</td>
              </tr>
            </tbody>
          </Table>
          </details>
        </td>
        <td className="text-center"><Button size="sm">complete</Button></td>
      </tr>
    </>)
  })

  return (
    <>
      {/* <h1 className='p-2'>TaskStatus</h1> */}
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
              <th>Employee Id</th>
              <th>Designation</th>
              <th>Task Details</th>
              <th>Task Status</th>
            </tr>
          </thead>
          <tbody>
            {res}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default TaskStatus;
