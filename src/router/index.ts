import express, {Router} from "express";
import { companyController } from "../controller/companyController";
import { categoryController } from "../controller/categoryController";
import { typeOfGoodController } from "../controller/typeOfGoodController";
import { productController } from "../controller/productController";
import { createCompanyValidator } from "../validators/companyValidator";
import { createValidator } from "../validators/categoryValidator";


const router : Router = express.Router();

// create a compnay
router.post("/company/new", createCompanyValidator ,companyController.createCompany);
// update a company
router.put("/company/:id", companyController.updateCompany)
// delete a company 
router.delete("/company/:id", companyController.deleteCompany);
// read all company 
router.get("/company/all", companyController.getAllCompany);
// create a category 
router.post("/category/new", createValidator, categoryController.createCategory)
// delete a category 
router.delete("/category/:id", categoryController.deleteCategory)
// update a category 
router.put("/category/:id", categoryController.updateCategory)
// read all category 
router.get("/category/all", categoryController.getAllCategory)
// create a typeOfGood
router.post("/good/new", typeOfGoodController.createGood)
// delete a typeOfGood 
router.delete("/good/:id", typeOfGoodController.deleteGood)
// read all typeofGood
router.get("/good/all", typeOfGoodController.getAllGood)
// update a typeofGood
router.put("/good/:id", typeOfGoodController.updateGood)
// read all products 
router.get("/product/all", productController.getAllProduct)
// update a product
router.put("/product/:id", productController.updateProduct)
// delete a product 
router.delete("/product/:id", productController.deleteProduct)
// create a product 
router.post("/product/new", productController.createProduct)
// bulk upload products

export default router;