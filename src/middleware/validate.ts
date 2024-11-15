// middleware/validate.ts

import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validate = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    // After sending the response, we return to prevent further execution
    return;
  }
  next();
};