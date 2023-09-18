import { Service } from 'typedi';
import { getRepository } from 'typeorm';

import { Products } from '../entities/Products';

@Service()
export default class ProductsService {
  public async createProduct(createProductsData: Partial<Products>): Promise<Products> {
    return getRepository(Products).save(createProductsData);
  }

  public async getProducts(): Promise<{list: Products[], totalCount: number}> {
    const postRepository = getRepository(Products);

    const list = await postRepository.find();
    const totalCount = await postRepository.count();
    return { list, totalCount };
  }

  public async getProductById(id: number): Promise<Products> {
    return getRepository(Products).findOne(id);
  }

  public async updateProduct(id: number, updateProductsData: Products): Promise<any> {
    return getRepository(Products).update(id, updateProductsData);
  }

  public async removeProduct(id: number): Promise<any> {
    return getRepository(Products).delete(id);
  }
}
