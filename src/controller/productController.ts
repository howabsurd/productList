import { Request, Response } from "express"
import { prisma } from "../index"
import { generateUUID } from "../utils/getuuid";
import { validationResult } from "express-validator";
export const productController = {
    getAllProduct : async(req : Request , res : Response) : Promise <Response> =>{
        try {
            const products = await  prisma.product.findMany();
            return res.status(200).json({product: products})
        } catch (error) {
            return res.status(500).json({err : error})
        }  
    },
    createProduct : async(req: Request , res : Response) : Promise<Response>=>{
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            req.body.id = generateUUID()
            const newProduct = await prisma.product.create({data:{
                ...req.body
            }})
            return res.status(200).json({product : newProduct})
        } catch (error) {
            return res.status(500).json({err : error})
        }
    },
    deleteProduct : async(req : Request , res : Response) : Promise<Response>=>{
        try {
            const deletedProduct = await prisma.product.delete({where : {id : req.params.id}})
            return res.status(200).json({product : deletedProduct})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `ProductID doesnt exist`})}
            return res.status(500).json({err : error})
        }
    },
    updateProduct : async (req : Request , res : Response) : Promise<Response> =>{
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
            const updatedProduct = await prisma.product.update({where :{id : req.params.id}, data:{...req.body}})
            return res.status(200).json({product : updatedProduct})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `ProductID doesnt exist`})}
            return res.status(500).json({err : error})
        }
    }
}