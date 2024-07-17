"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfGoodAction = void 0;
const __1 = require("..");
exports.typeOfGoodAction = {
    createtypeOfGoodAction: async (req) => {
        const existingTypeofGood = await __1.prisma.typeOfGood.findFirst({
            where: {
                name: req.body.name
            },
        });
        if (existingTypeofGood) {
            throw new Error('Type of Good already exists');
        }
    },
};
