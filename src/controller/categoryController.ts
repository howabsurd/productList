import { Response, Request } from "express"
import {prisma} from "../index";
import { validationResult } from "express-validator";

export const  categoryController = {
    createCategory : async(req :Request , res : Response) : Promise<Response>=>{
        try {
            const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
            // const {category_id , category_id}  = req.body;
            const newCategory = await prisma.category.create({data : {...req.body}})
            return res.status(200).json({category : newCategory})
        } catch (error) {
            return res.status(500).json({err : error})
        }
    },
    deleteCategory : async (req : Request , res: Response) : Promise<Response> =>{
        try {
            const deletedCategory = await prisma.category.delete({where : {category_id : req.params.id}})
            return res.status(200).json({category : deletedCategory, success : `Category deleted succesfully`})
        } catch (error) {
            return res.status(500).json({err: error})
        }
    },
    updateCategory : async(req: Request, res: Response) : Promise<Response>=>{
        try {
            const newCategory = await prisma.category.update({
                where : {
                    category_id : req.params.id,
                },
                data: {...req.body}
            })
            return res.status(200).json({category: newCategory});
        } catch (error) {
            return res.status(500).json({err : error})
        }
    },
    getAllCategory : async(req: Request , res: Response) : Promise<Response> =>{
        try {
            const categories = await prisma.category.findMany();
            return res.status(200).json({category : categories})
        } catch (error) {
            return res.status(500).json({err : error});
        }
    }
} 