import { Response, Request } from "express"
import { prisma } from "../index"

export const typeOfGoodController = {
    createGood : async(req: Request , res : Response) : Promise<Response> => {
        try {
            const newGood = await prisma.typeOfGood.create({data : {
                ...req.body
            }})
            return res.status(200).json({good : newGood});
        } catch (error) {
            return res.status(500).json({err : error})
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
            return res.status(500).json({err : error})
        }
    },
    getAllGood : async(req : Request , res : Response) : Promise<Response> =>{
        try {
            const allGoods = await prisma.typeOfGood.findMany();
        return res.status(200).json({good : allGoods})
        } catch (error) {
            return res.status(500).json({err : error})
        }
        
    },
    updateGood : async (req : Request, res : Response) : Promise<Response> =>{
        try {
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
            return res.status(500).json({err : error});
        }
    }
}