import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';
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
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
