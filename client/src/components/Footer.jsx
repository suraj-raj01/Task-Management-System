import React from "react";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
  } from 'mdb-react-ui-kit';
const Footer = () => {
  return (
    <>
       <MDBFooter className='text-black text-start' id="footer" style={{backgroundColor:'white'}}>
       <MDBContainer className='pt-1 text-center'>
        <section className='mb-1'>
          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='https://www.facebook.com/profile.php?id=100029684837140'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='https://x.com/surajk38656'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='https://www.instagram.com/its_suraj_kr__01/'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='https://www.linkedin.com/in/suraj-kumar-1965b0296/'
            target="_blank"
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            target="_blank"
            href='https://github.com/suraj-raj01'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBContainer className='p-3'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-capitalize'>Task Management System</h5>

            <p>
            A task management system application is a software tool designed to help individuals and teams effectively plan, organize, and track their work. These applications provide a centralized platform
            </p>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-capitalize'>Our Services</h5>
            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-black'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  Our Services
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  Contact Us
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className='mb-4 mb-md-0'>
            <h5 className='text-capitalize mb-0'>Our Services</h5>
            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-black'>
                Our Blogs
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  Portfolio
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  Privacy
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  Terms & Condition
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Developed By SURAJ KUMAR
        <br />
        © 2025 Copyright everything is reserved by <a className='text-black' href='https://task-management-system-sand-one.vercel.app/'>
           TaskManagement.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
};

export default Footer;
