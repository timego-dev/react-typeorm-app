// @ts-ignore
import request from 'supertest';
import { getRepository } from 'typeorm';

import app from '../../src/app';
import { connect } from '../../src/typeorm';
import { Products } from '../../src/entities/Products';
import ProductFactory from '../factories/product.factory';
import { pick } from '../../src/shared/utils/pick';

beforeAll(async () => {
    await connect();
    await getRepository(Products).clear();
});

afterAll(async () => {
    await getRepository(Products).clear();
});

describe('Product API', () => {
    it('Create product successfully.', async () => {
        const product = { name: 'test', info: 'test info', price: 10 };
        const actual = await request(app)
          .post('/api/product')
          .send(product);
        expect(actual.status).toBe(201);
        expect(pick(actual.body, ['name', 'info', 'price'])).toStrictEqual(product);
    });

    it('Get one product successfully.', async () => {
        const product = await ProductFactory();
        const actual = await request(app)
          .get(`/api/product/${product.id}`)
          .send();
        expect(actual.status).toBe(200);
        expect(pick(actual.body, ['id', 'name', 'description', 'price']))
          .toStrictEqual(pick(product, ['id', 'name', 'description', 'price']));
    });

    it('Update one product successfully.', async () => {
        const product = await ProductFactory();
        console.log('product>>>', product);
        const actual = await request(app)
          .put(`/api/product/${product.id}`)
          .send({ name: 'updated name', description: 'updated info', price: 200 });
        expect(actual.status).toBe(200);
    });

    it('Delete one product successfully.', async () => {
        const product = await ProductFactory();
        const actual = await request(app)
          .delete(`/api/product/${product.id}`)
          .send();
        expect(actual.status).toBe(200);
    });

    it('Fetch list successfully.', async () => {
        await ProductFactory();
        const actual = await request(app)
            .get('/api/product')
            .send();
        expect(actual.status).toBe(200);
    });
});
