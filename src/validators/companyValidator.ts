import { body, ValidationChain } from "express-validator";
// import { prisma } from "../index";


export const createCompanyValidator: ValidationChain[] = [
  body('companyName')
    .notEmpty().withMessage('companyName cannot be empty')
    .isString().withMessage('Company Name must be a string').trim()
    .isLength({ min: 4 }).withMessage('Company Name must be at least 4 characters'),

  body('alias')
    .notEmpty().withMessage('Alias cannot be empty')
    .isString().withMessage('Alias must be a string')
    .isLength({ min: 4 }).withMessage('Alias must be at least 4 characters'),
];

export const updateCompanyValidator: ValidationChain[] = [
  body('companyName')
    .notEmpty().withMessage('companyName cannot be empty')
    .isString().withMessage('Company Name must be a string')
    .isLength({ min: 4 }).withMessage('Company Name must be at least 4 characters'),

  body('alias')
    .notEmpty().withMessage('Alias cannot be empty')
    .isString().withMessage('Alias must be a string')
    .isLength({ min: 4 }).withMessage('Alias must be at least 4 characters'),
];

