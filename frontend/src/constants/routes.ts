import {
  ProductList,
} from '../pages';
import { FC } from 'react';

interface IRoute {
  path: string;
  element: FC;
}

export const ROUTES = {
  PRODUCT: {
    LIST: '/products'
  },
};

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.PRODUCT.LIST,
    element: ProductList
  },
];
