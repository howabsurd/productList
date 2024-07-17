"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyAction = void 0;
const __1 = require("..");
exports.companyAction = {
    createCompanyAction: async (req) => {
        const existingCompany = await __1.prisma.company.findFirst({
            where: {
                OR: [
                    { companyName: req.body.companyName },
                    { alias: req.body.alias },
                ],
            },
        });
        if (existingCompany) {
            if (existingCompany.companyName === req.body.companyName) {
                throw new Error('companyName already exists');
            }
            if (existingCompany.alias === req.body.alias) {
                throw new Error('alias already exists');
            }
        }
    },
    updateCompanyAction: async (req) => {
        const existingCompany = await __1.prisma.company.findFirst({
            where: {
                OR: [
                    { companyName: req.body.companyName },
                    { alias: req.body.alias },
                ],
            },
        });
        if (existingCompany) {
            if (existingCompany.company_id !== req.params.id) {
                throw new Error('Duplicate Record found');
            }
        }
    }
};
