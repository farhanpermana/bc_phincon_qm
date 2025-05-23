import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todo.route';
import { connectTodoDB, connectProductDB } from './config/database';
import productRoutes from './routes/product.route';
import path from 'path';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/products', productRoutes);
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Initialize database
const initializeDatabase = async () => {
  try {
    await connectTodoDB();
    await connectProductDB();
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); // Exit the process if the database connection fails
  }
};

export { app, initializeDatabase };