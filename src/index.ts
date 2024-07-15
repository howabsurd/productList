import express from "express";
import router from "./router/index"
import cors from "cors";

const app = express();

app.use((req,res,next)=>{
    console.log(req.path);
    console.log(req.method);
    next()
})
app.use(cors());

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