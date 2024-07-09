import { body, ValidationChain } from "express-validator";


export const createValidator : ValidationChain[]= [
    body('categoryName').not().isEmpty().withMessage('The task title is mandatry').trim().isString().withMessage("Titles needs to be text"),

];