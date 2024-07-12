import { prisma } from "..";
import { Request } from "express";

export const companyAction = {
  createCompanyAction: async (req: Request) => {
    const existingCompany = await prisma.company.findFirst({
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

    updateCompanyAction : async(req : Request) =>{
        const existingCompany = await prisma.company.findFirst({
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

}