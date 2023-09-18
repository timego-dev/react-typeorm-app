import { ENDPOINTS } from '../constants';
import { IGetParams } from '../interfaces';
import { Http } from '../utils';

const readAll = (params?: IGetParams): Promise<any> => {
  return Http.get(ENDPOINTS.PROJECT.BASE, params);
};

const create = (project): Promise<any> => {
  return Http.post(ENDPOINTS.PROJECT.BASE, project);
};

const update = (id: string, data): Promise<any> => {
  return Http.put(ENDPOINTS.PROJECT.ID(id), data);
};

const getById = (id: string): Promise<any> => {
  return Http.get(ENDPOINTS.PROJECT.ID(id));
};

const remove = (id: string) => {
  return Http.delete(ENDPOINTS.PROJECT.ID(id));
};

export const ProductApi = {
  readAll,
  create,
  update,
  getById,
  remove
};
