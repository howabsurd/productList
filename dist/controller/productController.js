"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const index_1 = require("../index");
const getuuid_1 = require("../utils/getuuid");
const express_validator_1 = require("express-validator");
exports.productController = {
    getAllProduct: async (req, res) => {
        try {
            const products = await index_1.prisma.product.findMany();
            return res.status(200).json({ product: products });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    createProduct: async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            req.body.id = (0, getuuid_1.generateUUID)();
            const newProduct = await index_1.prisma.product.create({ data: {
                    ...req.body
                } });
            return res.status(200).json({ product: newProduct });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await index_1.prisma.product.delete({ where: { id: req.params.id } });
            return res.status(200).json({ product: deletedProduct });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `ProductID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    },
    updateProduct: async (req, res) => {
        try {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const updatedProduct = await index_1.prisma.product.update({ where: { id: req.params.id }, data: { ...req.body } });
            return res.status(200).json({ product: updatedProduct });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `ProductID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    }
};
