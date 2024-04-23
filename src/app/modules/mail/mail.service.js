// mailerService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Your_Email_Service_Provider',
  auth: {
    user: 'your_email@example.com', 
    pass: 'your_email_password',
  },
});

exports.sendEmail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        reject('Error: Unable to send the email.');
      } else {
        console.log('Email sent: ' + info.response);
        resolve('Email sent successfully!');
      }
    });
  });
};
