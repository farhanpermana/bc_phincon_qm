import { productSequelize } from '../config/database';
import { seedCategories } from '../seeders/categories.seed';

async function runSeeders() {
  try {
    await productSequelize.authenticate();
    console.log('Connection has been established successfully.');
    
    // Sync models
    await productSequelize.sync({ alter: true });
    
    // Run seeders
    await seedCategories();
    
    console.log('All seeders completed successfully!');
  } catch (error) {
    console.error('Error running seeders:', error);
  } finally {
    await productSequelize.close();
  }
}

runSeeders();