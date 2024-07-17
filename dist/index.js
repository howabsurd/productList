"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./router/index"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((req, res, next) => {
    console.log(req.path);
    console.log(req.method);
    next();
});
const allowedOrigins = ['https://product-list-frontend.vercel.app', "http://localhost:3000"];
const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
app.get("/", (req, res) => {
    res.status(200).json("Welome to the deployment");
});
app.use((0, cors_1.default)(corsOptions));
// Import Prisma Client
const client_1 = require("@prisma/client");
// Instantiate Prisma Client
exports.prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use("/api", index_1.default);
const port = 4700;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});
