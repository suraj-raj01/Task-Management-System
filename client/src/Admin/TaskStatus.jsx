import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const TaskStatus = () => {

  const[mydata, setMydata] = useState([]);

  const loadData = async () => {
    let api = "http://localhost:8000/admin/taskstatus";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  let sno = 0;
  const res = mydata.map((key) => {
    sno++;
    return (
      <>
        <tr id="taskstatus">
          <td className="text-center">{sno}</td>
          <td>{key.empid.empemail}</td>
          <td className='text-center'>{key.taskstatus}</td>
          <td style={{width:'180px'}}>{key.empid.designation}</td>
          <td className="text-center">
          <details>
            <summary>See Task Details</summary>
            <Table responsive bordered width='20%'>
            <thead>
              <tr id="taskdetails">
                <th>Task</th>
                <th>Description</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{key.tasktitle}</td>
                <td>{key.description}</td>
                <td style={{textAlign:'center'}}>{key.completiondays}</td>
              </tr>
            </tbody>
          </Table>
          </details>
          </td>
          {/* <td className="text-center">
            <i class="far fa-circle-check"></i> &nbsp;&nbsp;
            <i class="far fa-circle-xmark"></i>
          </td> */}
        </tr>
      </>
    );
  });

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
          <Button size="sm" variant="primary">
            <i class="fas fa-magnifying-glass"></i> Search
          </Button>
        </Form>
      </div>
      <div id="display" style={{overflowY:'scroll'}}>
        <Table bordered responsive>
          <thead>
            <tr id="tablehead">
              <th>S.No</th>
              <th className='text-start'>Employee Id</th>
              <th className='text-center'>Task Status</th>
              <th style={{width:'140px'}}>Designation</th>
              <th>Task Details</th>
            </tr>
          </thead>
          <tbody>{res}</tbody>
        </Table>
      </div>
    </>
  );
};

export default TaskStatus;
