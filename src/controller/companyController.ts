import { Request, Response } from "express"
import {prisma} from "../index";
import { validationResult } from "express-validator";
import {companyAction} from "../actions/companyAction"
import { generateUUID } from "../utils/getuuid";


export const companyController = {
    createCompany: async (req: Request, res: Response): Promise<Response> => {
        try {
            req.body.company_id = generateUUID();
            await companyAction.createCompanyAction(req,);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json(errors);
            }
    
            const { company_id, companyName, alias } = req.body;
            const newCompany = await prisma.company.create({
                data: {
                    company_id,
                    companyName,
                    alias,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            });
    
            return res.status(200).json(newCompany);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

    },
    getAllCompany : async(req : Request, res : Response) : Promise<Response> =>{
        try {
            const companies = await prisma.company.findMany();
            return res.status(200).json({company : companies})
        } catch (error) {
            return res.status(500).json({err : error})
        }
    },
    deleteCompany : async(req :Request, res: Response) :Promise<Response> =>{
        try {
            const deleteCompany = await prisma.company.delete({
                where : {
                    company_id : req.params.id
                }
            })
            return res.status(200).json({company : deleteCompany, success : "deleted above record"})
        } catch (error) {
            console.log(error?.code);
            if(error?.code === "P2025"){ return res.status(400).json({err : `Company ID doesnt exiist`})}
            return res.status(500).json({err : error})
        }
    },
    updateCompany : async (req: Request , res: Response) : Promise<Response> => {
        try {
            const data = {
                companyName : req.body.companyName,
                alias : req.body.alias,
                updatedAt: new Date(),
            }
            const newCompany = await prisma.company.update({
                where : {
                    company_id : req.params.id
                },
                data
            })
            return res.status(200).json({company : newCompany})
        } catch (error) {
            if(error?.code === "P2025"){ return res.status(400).json({err : `Company ID doesnt exiist`})}
            return res.status(500).json({err : error})
        }
    }
}


