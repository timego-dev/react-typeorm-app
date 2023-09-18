import {
  DashboardPage,
  ProductListPage,
} from '../pages';
import { FC } from 'react';

interface IRoute {
  path: string;
  element: FC;
}

export const ROUTES = {
  DASHBOARD: '/',
  PRODUCT: {
    LIST: '/products'
  },
};

export const MAIN_ROUTES: IRoute[] = [
  {
    path: ROUTES.DASHBOARD,
    element: DashboardPage
  },
  {
    path: ROUTES.PRODUCT.LIST,
    element: ProductListPage
  },
];
