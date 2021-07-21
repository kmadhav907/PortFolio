import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connection.js';
import messageRoutes from './routes/messageRoutes.js';
import path from 'path';
dotenv.config();
const app = express();
const __dirname = path.resolve();
app.use(cors());

app.use(express.json());
connectDB();

app.use('/api/messages', messageRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on ${process.env.PORT || 5000}`);
});
