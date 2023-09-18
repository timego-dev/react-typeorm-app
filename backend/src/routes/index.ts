import { Router } from 'express';

import { productController } from '../controllers/ProductController';

const router = Router();

router.get('/product', productController.list);
router.get('/product/:id', productController.getProductById);
router.post('/product', productController.create);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.remove);

export default router;
