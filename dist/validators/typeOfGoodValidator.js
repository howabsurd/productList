"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTypeOfGoodValidator = exports.createTypeOfGoodValidator = void 0;
const express_validator_1 = require("express-validator");
// import { prisma } from "../index";
exports.createTypeOfGoodValidator = [
    (0, express_validator_1.body)('name')
        .notEmpty().withMessage('Name cannot be empty')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 4 characters')
];
exports.updateTypeOfGoodValidator = [
    (0, express_validator_1.body)('name')
        .notEmpty().withMessage('Name cannot be empty')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 4 characters')
];
