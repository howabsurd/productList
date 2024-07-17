import express from "express";
import router from "./router/index"
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use((req,res,next)=>{
    console.log(req.path);
    console.log(req.method);
    next()
})
const corsOptions ={
    origin:process.env.DEVELOPEMENT_FRONTEND, 
    credentials:true,       
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// Import Prisma Client
import { PrismaClient } from '@prisma/client';


// Instantiate Prisma Client
export const prisma = new PrismaClient();

app.use(express.json());
app.use("/api",router);


const port = 4700

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
})