import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"
import { errorHandler } from "./error";
import postersRoutes from "./routes/porters.routes"

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/posters", postersRoutes)

app.use(errorHandler)

export default app;
