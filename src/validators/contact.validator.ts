import { body, param } from 'express-validator';

export const contactValidators = {
  create: [
    body('firstName')
      .trim()
      .notEmpty()
      .withMessage('First name is required')
      .isLength({ min: 2, max: 50 })
      .withMessage('First name must be between 2 and 50 characters'),

    body('lastName')
      .trim()
      .notEmpty()
      .withMessage('Last name is required')
      .isLength({ min: 2, max: 50 })
      .withMessage('Last name must be between 2 and 50 characters'),

    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),

    body('phoneNumber')
      .trim()
      .notEmpty()
      .withMessage('Phone number is required')
      .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
      .withMessage('Invalid phone number format'),

    body('company')
      .trim()
      .optional()
      .isLength({ max: 100 })
      .withMessage('Company name cannot exceed 100 characters'),

    body('jobTitle')
      .trim()
      .optional()
      .isLength({ max: 100 })
      .withMessage('Job title cannot exceed 100 characters'),
  ],

  update: [
    param('id')
      .isMongoId()
      .withMessage('Invalid contact ID'),
      
    body('firstName')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('First name must be between 2 and 50 characters'),

    body('lastName')
      .optional()
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('Last name must be between 2 and 50 characters'),

    body('email')
      .optional()
      .trim()
      .isEmail()
      .withMessage('Invalid email format')
      .normalizeEmail(),

    body('phoneNumber')
      .optional()
      .trim()
      .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/)
      .withMessage('Invalid phone number format'),

    body('company')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Company name cannot exceed 100 characters'),

    body('jobTitle')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('Job title cannot exceed 100 characters'),
  ],

  delete: [
    param('id')
      .isMongoId()
      .withMessage('Invalid contact ID'),
  ],
};