import { Response, Request } from "express"
import { prisma } from "../index"
import { generateUUID } from "../utils/getuuid"
import { typeOfGoodAction } from "../actions/typeOfGoodAction";
import { validationResult } from "express-validator";

export const typeOfGoodController = {
    createGood : async(req: Request , res : Response) : Promise<Response> => {
        try {
            await typeOfGoodAction.createtypeOfGoodAction(req);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({err : errors.array()[0].msg})
            }
            req.body.typeid = generateUUID()
            const newGood = await prisma.typeOfGood.create({data : {
                ...req.body
            }})
            return res.status(200).json({good : newGood});
        } catch (error) {
            return res.status(500).json({err : error.message})
        }
    },
    deleteGood : async (req : Request,res : Response) : Promise<Response> => {
        try {
            const deletedGood = await prisma.typeOfGood.delete({
                where : {
                    typeid : req.params.id
                }
            })
            return res.status(200).json({typeOfGood : deletedGood, success : `Above good deleted`})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `TypeOfGoodID doesnt exist`})}
            return res.status(500).json({err : error.message})
        }
    },
    getAllGood : async(req : Request , res : Response) : Promise<Response> =>{
        try {
            const allGoods = await prisma.typeOfGood.findMany();
        return res.status(200).json({good : allGoods})
        } catch (error) {
            return res.status(500).json({err : error.message})
        }
        
    },
    updateGood : async (req : Request, res : Response) : Promise<Response> =>{
        try {
            await typeOfGoodAction.createtypeOfGoodAction(req);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({err : errors.array()[0].msg})
            }
            const updateGood = await prisma.typeOfGood.update({
                where : {
                    typeid : req.params.id
                }, 
                data : {
                    ...req.body
                }
            })
            return res.status(200).json({good : updateGood})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `TypeOfGoodID doesnt exist`})}
            return res.status(500).json({err : error.message});
        }
    }
}