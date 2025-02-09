"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidator = exports.createProductValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createProductValidator = [
    (0, express_validator_1.body)('categoryId')
        .notEmpty().withMessage('Category ID cannot be empty')
        .isString().withMessage('Category ID must be a string'),
    (0, express_validator_1.body)('name')
        .notEmpty().withMessage('Name cannot be empty')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    (0, express_validator_1.body)('companyId')
        .notEmpty().withMessage('Company ID cannot be empty')
        .isString().withMessage('Company ID must be a string'),
    (0, express_validator_1.body)('costPrice')
        .notEmpty().withMessage('Cost Price cannot be empty')
        .isInt({ min: 0 }).withMessage('Cost Price must be a positive integer'),
    (0, express_validator_1.body)('sellingPrice')
        .notEmpty().withMessage('Selling Price cannot be empty')
        .isInt({ min: 0 }).withMessage('Selling Price must be a positive integer'),
    (0, express_validator_1.body)('images')
        .isObject().withMessage('Images must be an Object')
        .optional(), // Assuming images can be optional
    (0, express_validator_1.body)('createdAt')
        .optional() // Assuming createdAt is generated by the database
        .isISO8601().toDate().withMessage('CreatedAt must be a valid date'),
    (0, express_validator_1.body)('attributes')
        .isObject().withMessage('Attributes must be a valid JSON object')
        .optional(), // Assuming attributes can be optional
    (0, express_validator_1.body)('typeofGoodId')
        .notEmpty().withMessage('Type of Good ID cannot be empty')
        .isString().withMessage('Type of Good ID must be a string')
];
exports.updateProductValidator = [
    (0, express_validator_1.body)('categoryId')
        .notEmpty().withMessage('Category ID cannot be empty')
        .isString().withMessage('Category ID must be a string'),
    (0, express_validator_1.body)('name')
        .notEmpty().withMessage('Name cannot be empty')
        .isString().withMessage('Name must be a string')
        .isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    (0, express_validator_1.body)('companyId')
        .notEmpty().withMessage('Company ID cannot be empty')
        .isString().withMessage('Company ID must be a string'),
    (0, express_validator_1.body)('costPrice')
        .notEmpty().withMessage('Cost Price cannot be empty')
        .isInt({ min: 0 }).withMessage('Cost Price must be a positive integer'),
    (0, express_validator_1.body)('sellingPrice')
        .notEmpty().withMessage('Selling Price cannot be empty')
        .isInt({ min: 0 }).withMessage('Selling Price must be a positive integer'),
    (0, express_validator_1.body)('images')
        .isObject().withMessage('Images must be an array')
        .optional(), // Assuming images can be optional
    (0, express_validator_1.body)('createdAt')
        .optional() // Assuming createdAt is generated by the database
        .isISO8601().toDate().withMessage('CreatedAt must be a valid date'),
    (0, express_validator_1.body)('attributes')
        .isObject().withMessage('Attributes must be a valid JSON object')
        .optional(), // Assuming attributes can be optional
    (0, express_validator_1.body)('typeofGoodId')
        .notEmpty().withMessage('Type of Good ID cannot be empty')
        .isString().withMessage('Type of Good ID must be a string')
];
