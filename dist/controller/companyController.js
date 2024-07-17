"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyController = void 0;
const index_1 = require("../index");
const express_validator_1 = require("express-validator");
const companyAction_1 = require("../actions/companyAction");
const getuuid_1 = require("../utils/getuuid");
exports.companyController = {
    createCompany: async (req, res) => {
        try {
            req.body.company_id = (0, getuuid_1.generateUUID)();
            await companyAction_1.companyAction.createCompanyAction(req);
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const { company_id, companyName, alias } = req.body;
            const newCompany = await index_1.prisma.company.create({
                data: {
                    company_id,
                    companyName,
                    alias,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
            return res.status(200).json(newCompany);
        }
        catch (error) {
            return res.status(500).json({ error: error.message });
        }
    },
    getAllCompany: async (req, res) => {
        try {
            const companies = await index_1.prisma.company.findMany();
            return res.status(200).json({ company: companies });
        }
        catch (error) {
            return res.status(500).json({ err: error });
        }
    },
    deleteCompany: async (req, res) => {
        try {
            const deleteCompany = await index_1.prisma.company.delete({
                where: {
                    company_id: req.params.id
                }
            });
            return res.status(200).json({ company: deleteCompany, success: "deleted above record" });
        }
        catch (error) {
            console.log(error?.code);
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `Company ID doesnt exiist` });
            }
            return res.status(500).json({ err: error });
        }
    },
    updateCompany: async (req, res) => {
        try {
            await companyAction_1.companyAction.updateCompanyAction(req);
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const data = {
                companyName: req.body.companyName,
                alias: req.body.alias,
                updatedAt: new Date(),
            };
            const newCompany = await index_1.prisma.company.update({
                where: {
                    company_id: req.params.id
                },
                data
            });
            return res.status(200).json({ company: newCompany });
        }
        catch (error) {
            if (error?.code === "P2025") {
                return res.status(400).json({ err: `Company ID doesnt exiist` });
            }
            return res.status(500).json({ err: error });
        }
    }
};
