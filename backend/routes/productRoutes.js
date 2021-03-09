/* PRODUCT ROUTER */
import express from 'express';
import {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protect, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, isAdmin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, isAdmin, deleteProductById)
  .put(protect, isAdmin, updateProductById);

export default router;
