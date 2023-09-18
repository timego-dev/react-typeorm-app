import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/ProductService';

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  public list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { list, totalCount } = await this.productService.getProducts();

      res.json({
        list,
        totalCount
      });
    } catch (err) {
      next(err);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = await this.productService.createProduct(req.body);

      res.status(201).json(product);
    } catch (err) {
      next(err);
    }
  };

  public getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const products = await this.productService.getProductById(+id);

      res.status(200).json(products);
    } catch (err) {
      next(err);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.productService.updateProduct(+id, req.body);
      res.status(200).json();
    } catch  (err) {
      next(err);
    }
  };

  public remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      await this.productService.removeProduct(+id);
      res.status(200).json();
    } catch (err) {
      next(err);
    }
  }
}

export const productController = new ProductController();
