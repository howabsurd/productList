import { prisma } from "..";
import { Request } from "express";

export const companyAction = {
  createCompanyAction: async (req: Request) => {
    const existingCompany = await prisma.company.findFirst({
        where: {
            OR: [
                { company_id: req.body.company_id },
                { companyName: req.body.companyName },
                { alias: req.body.alias },
            ],
        },
    });
    if (existingCompany) {
        if (existingCompany.company_id === req.body.company_id) {
            throw new Error('company_id already exists');
        }
        if (existingCompany.companyName === req.body.companyName) {
            throw new Error('companyName already exists');
        }
        if (existingCompany.alias === req.body.alias) {
            throw new Error('alias already exists');
        }
    }
},

}