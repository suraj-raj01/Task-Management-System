import { message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

const TaskStatus = () => {
  const [mydata, setMydata] = useState([]);
  const [isVisible, setIsvisible] = useState(true);

  const loadData = async () => {
    let api = "http://localhost:8000/admin/emptaskstatus";
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };
  useEffect(() => {
    loadData();
    setTimeout(() => {
      setIsvisible(false);
    }, 800);
    setIsvisible(true);
  }, []);

  const ReassignTask = async (id) => {
    let api = "http://localhost:8000/admin/reassigntask";
    try {
      const response = await axios.post(api, { id: id });
      message.success(response.data);
      loadData();
    } catch (error) {
      message.error(error.response.data.msg);
    }
  };

  let sno = 0;
  const res = mydata.map((key) => {
    sno++;
    return (
      <>
        <tr id="taskstatus">
          <td className="text-center">{sno}</td>
          <td>{key.empid.empemail}</td>
          <td>{key.empid.designation}</td>
          <td className="text-center">{key.taskstatus}</td>
          <td className="text-center">
            {key.empreport === "success" ? (
              <i
                class="fas fa-circle-check"
                style={{ color: "green", fontSize: "20px" }}
              ></i>
            ) : (
              <i
                class="fas fa-circle-xmark"
                style={{ color: "red", fontSize: "20px" }}
              ></i>
            )}
          </td>
          <td className="text-center" >  
              <Button size="sm" onClick={() => {
                  ReassignTask(key._id);
                }}
              >
              Re-Assign
              </Button>
          </td>
          <td className="text-center" >
            <details>
            <summary>See Task Details</summary>
            <Table responsive bordered width='100%'>
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

  const res1 = mydata.map((key) => {
    return <></>;
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
      <div id="display" style={{ overflowY: "scroll" }}>
        {isVisible ? (
          <center style={{ color: "#1677ff", marginTop: "50px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif"
              alt=""
              height="60px"
            />
          </center>
        ) : (
          <Table bordered responsive>
            <thead>
              <tr id="tablehead">
                <th>S.No</th>
                <th className="text-start">Employee Id</th>
                <th className="text-start">Designation</th>
                <th className="text-center">Task Status</th>
                <th>Status</th>
                <th className="text-center">Re-Assign</th>
                <th>Task Details</th>
              </tr>
            </thead>
            <tbody>{res}</tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default TaskStatus;
