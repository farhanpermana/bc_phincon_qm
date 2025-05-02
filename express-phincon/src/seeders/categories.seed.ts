import { Category } from '../models/category.model';

const categoriesData = [
  { name: 'Electronics' },
  { name: 'Clothing' },
  { name: 'Home & Kitchen' },
  { name: 'Books' },
  { name: 'Sports & Outdoors' },
  { name: 'Beauty & Personal Care' },
  { name: 'Toys & Games' },
  { name: 'Automotive' },
  { name: 'Health & Household' },
  { name: 'Office Products' }
];

export async function seedCategories() {
  try {
    // Check if categories already exist
    const existingCategories = await Category.count();
    
    if (existingCategories === 0) {
      await Category.bulkCreate(categoriesData);
      console.log('Categories seeded successfully!');
    } else {
      console.log('Categories already exist, skipping seeding.');
    }
  } catch (error) {
    console.error('Error seeding categories:', error);
  }
}