import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    name: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  },
  { timestamps: true }
);
const Message = mongoose.model('Message', messageSchema);
export default Message;
