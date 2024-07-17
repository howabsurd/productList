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
const allowedOrigins = ['https://product-list-frontend.vercel.app', "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.get("/",(req,res)=>{
    res.status(200).json("Welome to the deployment")
})

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