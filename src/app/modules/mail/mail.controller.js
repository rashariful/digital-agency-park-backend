// mailerController.js
const mailerService = require('./mailerService');

exports.sendContactFormEmail = async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: 'your_email@example.com', // Replace with your email
    to: 'recipient@example.com', // Replace with recipient email
    subject: 'New Inquiry from Your Website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  }; 

  try { 
    const response = await mailerService.sendEmail(mailOptions);
    res.status(200).send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
