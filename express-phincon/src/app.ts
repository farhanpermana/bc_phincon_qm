import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { connectTodoDB, connectProductDB } from './config/database';
import todoRoutes from './routes/todo.route';
import productRoutes from './routes/product.route';
import categoriesRoutes from './routes/categories.route'; // Fixed import path

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/todos', todoRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoriesRoutes); // Now correctly imported

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Initialize databases
const initializeDatabase = async () => {
  try {
    await connectTodoDB();
    await connectProductDB();
    console.log('Databases connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export { app, initializeDatabase };