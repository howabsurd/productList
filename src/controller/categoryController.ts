import { Response, Request } from "express"
import {prisma} from "../index";
import { validationResult } from "express-validator";
import {generateUUID} from "../utils/getuuid"
import { categoryAction } from "../actions/categoryAction";
export const  categoryController = {
    createCategory : async(req :Request , res : Response) : Promise<Response>=>{
        try {
            const errors = validationResult(req);
            await categoryAction.createCategoryAction(req)
        if(!errors.isEmpty()){
            return res.status(400).json({err : errors.array()[0].msg})
        }
            const newCategory = await prisma.category.create({data : {...req.body, category_id : generateUUID()}})
            return res.status(200).json({category : newCategory})
        } catch (error) {
            return res.status(500).json({err : error.message})
        }
    },
    deleteCategory : async (req : Request , res: Response) : Promise<Response> =>{
        try {
            const deletedCategory = await prisma.category.delete({where : {category_id : req.params.id}})
            return res.status(200).json({category : deletedCategory, success : `Category deleted succesfully`})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `CategoryID doesnt exist`})}
            return res.status(500).json({err: error.message})
        }
    },
    updateCategory : async(req: Request, res: Response) : Promise<Response>=>{ 
        try {
            const errors = validationResult(req);
            await categoryAction.createCategoryAction(req)
        if(!errors.isEmpty()){
            return res.status(400).json({err : errors.array()[0].msg})
        }
            const newCategory = await prisma.category.update({
                where : {
                    category_id : req.params.id,
                },
                data: {...req.body}
            })
            return res.status(200).json({category: newCategory});
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `CategoryID doesnt exist`})}
            return res.status(500).json({err : error.message})
        }
    },
    getAllCategory : async(req: Request , res: Response) : Promise<Response> =>{
        try {
            const categories = await prisma.category.findMany();
            return res.status(200).json({category : categories})
        } catch (error) {
            return res.status(500).json({err : error.message});
        }
    }
} 