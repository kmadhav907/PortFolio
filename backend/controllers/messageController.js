import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';
import nodeMailer from 'nodemailer';

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kmadhav.webapp@gmail.com',
    pass: 'mad@qwerty'
  }
});

export const createMessage = asyncHandler(async (req, res) => {
  const { email, name, message } = req.body;
  if (isValid(email)) {
    const newmessage = await Message.create({
      email,
      name,
      message
    });
    if (newmessage) {
      res.status(201).json({
        _id: newmessage.id,
        name: newmessage.name
      });
      const mailOptions = {
        from: 'kmadhav.webapp@gmail.com',
        to: email,
        subject: 'Thanks for Contacting me!!',
        html:
          '<h1>Welcome ' +
          name +
          ' </h1><p> Will get Back to you soon😜😜😜</p>'
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          res.status(400);
          throw new Error('SMTP ERROR');
        } else {
          console.log('Email sent:' + info.response);
        }
      });
    } else {
      res.status(400);
      throw new Error("Couldn't send the request");
    }
  } else {
    res.status(400);
    throw new Error('Enter a valid Email Address');
  }
});
const isValid = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
