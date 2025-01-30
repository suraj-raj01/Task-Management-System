import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./Admin/AdminDashboard";
import CreateUser from "./Admin/CreateUser";
import DisplayUser from "./Admin/DisplayUser";
import AssignTask from "./Admin/AssignTask";
import TaskStatus from "./Admin/TaskStatus";
import AdminProfile from "./Admin/AdminProfile";
import DeleteEmployee from "./Admin/DeleteEmployee";
import EditEmp from "./Admin/EditEmployee";


import UserDashboard from "./User/UserDashboard";
import UserProfile from "./User/UserProfile";
import UserTask from "./User/UserTask";
import ResetPassword from "./User/ResetPassword";
import CompletedTask from "./User/CompletedTask";
import PendingTask from "./User/PendingTask";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="admindashboard" element={<AdminDashboard />}>
              <Route index element={<AdminProfile />} />
              <Route path="adminprofile" element={<AdminProfile />} />
              <Route path="createuser" element={<CreateUser />} />
              <Route path="displayuser" element={<DisplayUser />} />
              <Route path="assigntask/:id" element={<AssignTask />} />
              <Route path="taskstatus" element={<TaskStatus />} />
              <Route path="deleteemployee" element={<DeleteEmployee />} />
              <Route path="editemp/:id" element={<EditEmp />} />
            </Route>
            <Route path="userdashboard" element={<UserDashboard />}>
              <Route index element={<UserProfile/>}/>
              <Route path='userprofile' element={<UserProfile/>}/>
              <Route path='usertask' element={<UserTask/>}/>
              <Route path='completedtask' element={<CompletedTask/>}/>
              <Route path='pendingtask' element={<PendingTask/>}/>
              <Route path='resetpassword' element={<ResetPassword/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
