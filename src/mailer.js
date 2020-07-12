/* eslint-disable import/prefer-default-export */
import nodemailer from 'nodemailer';

const from = '"bibliophile" <info@bibliophile.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Welcome to Bibliophile',
    text: `
        Welcome to Bibliophile! Please confirm your email. 
        ${user.generateConfirmationUrl()} 
        `,
  };
  transport.sendMail(email);
}
