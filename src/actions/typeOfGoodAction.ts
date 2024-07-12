import { prisma } from "..";
import { Request } from "express";

export const typeOfGoodAction = {
  createtypeOfGoodAction: async (req: Request) => {
    const existingTypeofGood = await prisma.typeOfGood.findFirst({
        where: {
            name : req.body.name
        },
    });
    if (existingTypeofGood) {
         throw new Error('Type of Good already exists')
    }
},
}