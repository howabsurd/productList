import { body, ValidationChain } from "express-validator";
// import { prisma } from "../index";


export const createCompanyValidator: ValidationChain[] = [
    body('company_id')
    .notEmpty().withMessage('company_id is mandatory')
    .isString().withMessage('company_id must be a string')
    .isLength({ min: 4 }).withMessage('company_id must be at least 4 characters'),
  
  body('companyName')
    .notEmpty().withMessage('companyName cannot be empty')
    .isString().withMessage('Company Name must be a string')
    .isLength({ min: 4 }).withMessage('Company Name must be at least 4 characters'),

  body('alias')
    .notEmpty().withMessage('Alias cannot be empty')
    .isString().withMessage('Alias must be a string')
    .isLength({ min: 4 }).withMessage('Alias must be at least 4 characters'),
];
