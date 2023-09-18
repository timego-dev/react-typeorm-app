export interface IGetParams {
  query?: any;
  projection?: any;
  options?: any;
  aggregate?: any;
}

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}
