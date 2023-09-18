import { Response } from 'express';

import { ResponseStatus } from '../constants/global.constants';

export function handleError(res: Response, code: number, message: string, status: ResponseStatus = ResponseStatus.FAILED) {
  return res.status(code).json({
    status,
    message,
  });
}
