import express from 'express';
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getLowStockProducts,
} from '../controllers/productController.js';

const router = express.Router();

// Low Stock Route (must come before /:id)
router.get('/low-stock', getLowStockProducts);

// CRUD Routes
router.route('/')
  .post(createProduct)
  .get(getProducts);

router.route('/:id')
  .put(updateProduct)
  .delete(deleteProduct);

export default router;