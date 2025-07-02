import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'superSecretJWTKey';

interface DecodedToken {
  name: string;
  iat: number;
  exp: number;
}

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Unauthorized access' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;

    // Attach the admin info to the request object safely
    (req as any).admin = { name: decoded.name };

    next();
  } catch (error) {
    console.error('JWT verification failed:', error);
    res.status(403).json({ error: 'Forbidden access' });
    return;
  }
};
