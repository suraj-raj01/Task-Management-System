import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const Layout = () => {

  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" id="navbar">
        <Container>
          <Navbar.Brand as={Link} to="home">Task Management</Navbar.Brand>
          <span style={{padding:'2px 8px',boxShadow:'0 0 1px',borderRadius:'50%'}}>
          <i class="fas fa-moon"></i>
          </span>
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
