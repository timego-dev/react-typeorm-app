import { getRepository } from 'typeorm';

import { Products } from '../../src/entities/Products';

const ProductFactory = async (): Promise<Products> => {
    const post: Partial<Products> = {
        name: 'test post',
        description: 'This is test product',
        price: 100
    };
    return await getRepository(Products).save(post);
};

export default ProductFactory;
