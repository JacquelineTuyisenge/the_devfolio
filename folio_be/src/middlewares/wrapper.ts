// src/middleware/uploadWrapper.ts
import { Request, Response, NextFunction } from 'express';
import upload from './multer';          // your existing upload.ts

export const uploadSingle = (field: string) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  upload.single(field)(req, res, (err) => {
    if (err) return next(err);          // passes Multer/Cloudinary error to handler
    next();
  });
};
