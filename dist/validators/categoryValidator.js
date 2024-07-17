"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryValidator = exports.createCategoryValidator = void 0;
const express_validator_1 = require("express-validator");
exports.createCategoryValidator = [
    (0, express_validator_1.body)('categoryName').not().isEmpty().withMessage('The task title is mandatry').trim().isString().withMessage("Titles needs to be text"),
];
exports.updateCategoryValidator = [
    (0, express_validator_1.body)('categoryName').not().isEmpty().withMessage('The task title is mandatry').trim().isString().withMessage("Titles needs to be text"),
];
