const nodemailer = require("nodemailer");
require('dotenv').config();
// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use 'gmail', 'outlook', etc., or configure SMTP settings
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

// Verify the transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready to send messages');
  }
});

module.exports=transporter;