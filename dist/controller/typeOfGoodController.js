"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfGoodController = void 0;
const index_1 = require("../index");
const getuuid_1 = require("../utils/getuuid");
const typeOfGoodAction_1 = require("../actions/typeOfGoodAction");
const express_validator_1 = require("express-validator");
exports.typeOfGoodController = {
    createGood: async (req, res) => {
        try {
            await typeOfGoodAction_1.typeOfGoodAction.createtypeOfGoodAction(req);
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            req.body.typeid = (0, getuuid_1.generateUUID)();
            const newGood = await index_1.prisma.typeOfGood.create({ data: {
                    ...req.body
                } });
            return res.status(200).json({ good: newGood });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    deleteGood: async (req, res) => {
        try {
            const deletedGood = await index_1.prisma.typeOfGood.delete({
                where: {
                    typeid: req.params.id
                }
            });
            return res.status(200).json({ typeOfGood: deletedGood, success: `Above good deleted` });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `TypeOfGoodID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    },
    getAllGood: async (req, res) => {
        try {
            const allGoods = await index_1.prisma.typeOfGood.findMany();
            return res.status(200).json({ good: allGoods });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    updateGood: async (req, res) => {
        try {
            await typeOfGoodAction_1.typeOfGoodAction.createtypeOfGoodAction(req);
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const updateGood = await index_1.prisma.typeOfGood.update({
                where: {
                    typeid: req.params.id
                },
                data: {
                    ...req.body
                }
            });
            return res.status(200).json({ good: updateGood });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `TypeOfGoodID doesnt exist` });
            }
            return res.status(500).json({ err: error });
        }
    }
};
