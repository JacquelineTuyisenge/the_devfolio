import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // log the full stack so you SEE the real problem
  console.error('🔥  Global error:', err);

  res.status(err.status || 500).json({
    error: err.message || 'Internal server error',
    details: err,
  });
};
