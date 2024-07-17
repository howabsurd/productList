"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryAction = void 0;
const __1 = require("..");
exports.categoryAction = {
    createCategoryAction: async (req) => {
        const existingCategory = await __1.prisma.category.findFirst({
            where: {
                categoryName: req.body.categoryName
            },
        });
        if (existingCategory) {
            if (existingCategory.categoryName === req.body.categoryName) {
                throw new Error('category_Name already exists');
            }
        }
    },
};
