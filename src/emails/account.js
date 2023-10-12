require('dotenv').config();




const sgMail = require('@sendgrid/mail');
const sandGridAPIKey = process.env.SandGridAPIKey;

console.log(sandGridAPIKey);
sgMail.setApiKey(sandGridAPIKey);

const msg = {
  to: 'jay.ganatra.kevit@gmail.com', 
  from: 'jay.ganatra.kevit@gmail.com', 
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
  });
