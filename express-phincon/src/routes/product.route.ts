import express from 'express';
import type { Request, Response } from 'express';
import multer from 'multer';
import { Product } from '../models/product.model';
import { Op } from 'sequelize';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// CREATE PRODUCT
router.post('/', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : null;

    await Product.create({ name, description, price, category, image_url });

    res.status(201).json({ message: 'Product created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create product' });
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
      whereClause.category = category;
    }

    const products = await Product.findAndCountAll({
      where: whereClause,
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
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            res.status(404).json({ error: 'Product not found' });
            return;
        }
    
        res.json(product);
        }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// UPDATE PRODUCT
router.put('/:id', upload.single('image'), async (req: Request, res: Response) => {
  try {
    const { name, description, price, category } = req.body;
    const image_url = req.file ? `/uploads/${req.file.filename}` : undefined;

    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
      return;
    }

    await product.update({
      name,
      description,
      price,
      category,
      ...(image_url && { image_url }),
    });

    res.json({ message: 'Product updated' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update product' });
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