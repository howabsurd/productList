"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const companyController_1 = require("../controller/companyController");
const categoryController_1 = require("../controller/categoryController");
const typeOfGoodController_1 = require("../controller/typeOfGoodController");
const productController_1 = require("../controller/productController");
const companyValidator_1 = require("../validators/companyValidator");
const categoryValidator_1 = require("../validators/categoryValidator");
const typeOfGoodValidator_1 = require("../validators/typeOfGoodValidator");
const productValidator_1 = require("../validators/productValidator");
const router = express_1.default.Router();
// create a compnay
router.post("/company/new", companyValidator_1.createCompanyValidator, companyController_1.companyController.createCompany);
// update a company
router.put("/company/:id", companyValidator_1.updateCompanyValidator, companyController_1.companyController.updateCompany);
// delete a company 
router.delete("/company/:id", companyController_1.companyController.deleteCompany);
// read all company 
router.get("/company/all", companyController_1.companyController.getAllCompany);
// create a category 
router.post("/category/new", categoryValidator_1.createCategoryValidator, categoryController_1.categoryController.createCategory);
// delete a category 
router.delete("/category/:id", categoryController_1.categoryController.deleteCategory);
// update a category 
router.put("/category/:id", categoryValidator_1.updateCategoryValidator, categoryController_1.categoryController.updateCategory);
// read all category 
router.get("/category/all", categoryController_1.categoryController.getAllCategory);
// create a typeOfGood
router.post("/good/new", typeOfGoodValidator_1.createTypeOfGoodValidator, typeOfGoodController_1.typeOfGoodController.createGood);
// delete a typeOfGood 
router.delete("/good/:id", typeOfGoodController_1.typeOfGoodController.deleteGood);
// read all typeofGood
router.get("/good/all", typeOfGoodController_1.typeOfGoodController.getAllGood);
// update a typeofGood
router.put("/good/:id", typeOfGoodValidator_1.updateTypeOfGoodValidator, typeOfGoodController_1.typeOfGoodController.updateGood);
// read all products 
router.get("/product/all", productController_1.productController.getAllProduct);
// update a product
router.put("/product/:id", productValidator_1.updateProductValidator, productController_1.productController.updateProduct);
// delete a product 
router.delete("/product/:id", productController_1.productController.deleteProduct);
// create a product 
router.post("/product/new", productValidator_1.createProductValidator, productController_1.productController.createProduct);
// bulk upload products
exports.default = router;
