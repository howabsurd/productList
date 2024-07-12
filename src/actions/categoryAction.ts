import { prisma } from "..";
import { Request } from "express";

export const categoryAction = {
    createCategoryAction: async (req: Request) => {
      const existingCategory = await prisma.category.findFirst({
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
  
  }