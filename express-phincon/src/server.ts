import dotenv from 'dotenv';
import { app, initializeDatabase } from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});