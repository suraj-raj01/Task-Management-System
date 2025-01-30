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
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='#!'
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
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg="6" md="12" className='mb-4 mb-md-0'>
            <h5 className='text-capitalize'>Task Management System</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
              est atque cumque eum delectus sint!
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
        © 2025 Copyright : &nbsp; 
         <a className='text-black' href='https://mdbootstrap.com/'>
           TaskManagement.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
};

export default Footer;
