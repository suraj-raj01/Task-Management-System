import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { message } from "antd";

const Layout = () => {

  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" id="navbar">
        <Container>
          <Navbar.Brand as={Link} to="home">Task Management</Navbar.Brand>
          
        </Container>
      </Navbar>
      <div id="layOut">
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
