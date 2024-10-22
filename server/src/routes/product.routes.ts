import express from 'express'
import { getProducts } from '../controllers/getProducts.controller';
import { addProducts } from '../controllers/addProducts.controller';

const router = express.Router();

router.get('/:userId/get', getProducts);
router.post('/:userId/add', addProducts);

export default router;