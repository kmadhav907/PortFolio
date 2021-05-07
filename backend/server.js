import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connection.js';
import messageRoutes from './routes/messageRoutes.js';
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
connectDB();
app.use('/api/messages', messageRoutes);
app.get('/', (req, res) => {
  res.send('API is running....');
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.PORT || 5000}`);
});
