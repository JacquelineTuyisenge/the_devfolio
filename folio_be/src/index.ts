import express from 'express';
import dotenv from 'dotenv';
import blogRoutes from './routes/blog';
import adminRoutes from './routes/admin';
import cors from 'cors';
import { connectDB } from './config/db';
import './models'; // Ensure models are initialized
import { errorHandler } from './middlewares/error';
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
app.use(errorHandler)
app.get('/', (req, res) => {
  res.send('API Running...!');
});

app.use('/api/blogs', blogRoutes);
app.use('/api/admin', adminRoutes);


const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB(); // Ensure DB is up before serving
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

startServer();
