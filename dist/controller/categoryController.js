"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryController = void 0;
const index_1 = require("../index");
const express_validator_1 = require("express-validator");
const getuuid_1 = require("../utils/getuuid");
const categoryAction_1 = require("../actions/categoryAction");
exports.categoryController = {
    createCategory: async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            await categoryAction_1.categoryAction.createCategoryAction(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newCategory = await index_1.prisma.category.create({ data: { ...req.body, category_id: (0, getuuid_1.generateUUID)() } });
            return res.status(200).json({ category: newCategory });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const deletedCategory = await index_1.prisma.category.delete({ where: { category_id: req.params.id } });
            return res.status(200).json({ category: deletedCategory, success: `Category deleted succesfully` });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `CategoryID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    },
    updateCategory: async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            await categoryAction_1.categoryAction.createCategoryAction(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const newCategory = await index_1.prisma.category.update({
                where: {
                    category_id: req.params.id,
                },
                data: { ...req.body }
            });
            return res.status(200).json({ category: newCategory });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `CategoryID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    },
    getAllCategory: async (req, res) => {
        try {
            // @ts-ignore
            console.log(req.headers.cookie);
            const categories = await index_1.prisma.category.findMany();
            return res.status(200).json({ category: categories });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    }
};
