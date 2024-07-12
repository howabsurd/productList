import { body, ValidationChain } from "express-validator";
// import { prisma } from "../index";


export const createTypeOfGoodValidator: ValidationChain[] = [
  body('name')
    .notEmpty().withMessage('Name cannot be empty')
    .isString().withMessage('Name must be a string')
    .isLength({ min: 3 }).withMessage('Name must be at least 4 characters')
];


export const updateTypeOfGoodValidator: ValidationChain[] = [
    body('name')
      .notEmpty().withMessage('Name cannot be empty')
      .isString().withMessage('Name must be a string')
      .isLength({ min: 3 }).withMessage('Name must be at least 4 characters')
  ];