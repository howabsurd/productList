"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompanyValidator = exports.createCompanyValidator = void 0;
const express_validator_1 = require("express-validator");
// import { prisma } from "../index";
exports.createCompanyValidator = [
    (0, express_validator_1.body)('companyName')
        .notEmpty().withMessage('companyName cannot be empty')
        .isString().withMessage('Company Name must be a string').trim()
        .isLength({ min: 4 }).withMessage('Company Name must be at least 4 characters'),
    (0, express_validator_1.body)('alias')
        .notEmpty().withMessage('Alias cannot be empty')
        .isString().withMessage('Alias must be a string')
        .isLength({ min: 4 }).withMessage('Alias must be at least 4 characters'),
];
exports.updateCompanyValidator = [
    (0, express_validator_1.body)('companyName')
        .notEmpty().withMessage('companyName cannot be empty')
        .isString().withMessage('Company Name must be a string')
        .isLength({ min: 4 }).withMessage('Company Name must be at least 4 characters'),
    (0, express_validator_1.body)('alias')
        .notEmpty().withMessage('Alias cannot be empty')
        .isString().withMessage('Alias must be a string')
        .isLength({ min: 4 }).withMessage('Alias must be at least 4 characters'),
];
