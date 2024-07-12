import { body, ValidationChain } from "express-validator";


export const createCategoryValidator : ValidationChain[]= [
    body('categoryName').not().isEmpty().withMessage('The task title is mandatry').trim().isString().withMessage("Titles needs to be text"),

];

export const updateCategoryValidator : ValidationChain[]= [
    body('categoryName').not().isEmpty().withMessage('The task title is mandatry').trim().isString().withMessage("Titles needs to be text"),

];
