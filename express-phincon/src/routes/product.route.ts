import express, { Request, Response } from 'express';
import { Op } from 'sequelize';
import { upload } from '../middlewares/upload.middleware';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

const router = express.Router();

// CREATE PRODUCT - Add category validation
router.post('/', upload.single('image'), async (req: Request, res: Response) => {
    try {
      const { name, description, price, category_id } = req.body;
      const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
  
      // First, check if the category exists
      const category = await Category.findByPk(category_id);
      if (!category) {
        res.status(400).json({ error: `Category with ID ${category_id} does not exist` });
        return;
      }
  
      const newProduct = await Product.create({
        name,
        description,
        price,
        category_id: parseInt(category_id), // Ensure it's a number
        image_url,
      });
      
      res.status(201).json({ message: 'Product created', product: newProduct });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update product', details: err instanceof Error ? err.message : 'Unknown error' });
    }
  });
  
  // UPDATE PRODUCT - Add category validation
  router.put('/:id', upload.single('image'), async (req: Request, res: Response) => {
    try {
      const { name, description, price, category_id } = req.body;
      const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;
  
      // First, check if the product exists
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
  
      // Then, check if the category exists if category_id is being updated
      if (category_id) {
        const category = await Category.findByPk(category_id);
        if (!category) {
            res.status(400).json({ error: `Category with ID ${category_id} does not exist` });
          return;
        }
      }
  
      await product.update({
        name,
        description,
        price,
        category_id: category_id ? parseInt(category_id) : product.category_id, // Ensure it's a number
        ...(image_url && { image_url }),
      });
  
      res.json({ message: 'Product updated', product });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to update product', details: err instanceof Error ? err.message : 'Unknown error' });
    }
  });
// READ PRODUCTS + Search + Filter + Pagination + Sorting
router.get('/', async (req: Request, res: Response) => {
  try {
    const { search = '', sort = 'id', order = 'ASC', page = '1', limit = '10', category } = req.query;

    const whereClause: any = {
      name: { [Op.like]: `%${search}%` },
    };
    if (category) {
      whereClause.category_id = category;
    }

    const products = await Product.findAndCountAll({
      where: whereClause,
      include: [{ model: Category, as: 'category' }],
      order: [[sort as string, order as string]],
      limit: parseInt(limit as string),
      offset: (parseInt(page as string) - 1) * parseInt(limit as string),
    });

    res.json({
      products: products.rows,
      total: products.count,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// READ SINGLE PRODUCT
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category, as: 'category' }],
    });

    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch product' });
  }
});

// DELETE PRODUCT
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    await product.destroy();
    res.json({ message: 'Product deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
