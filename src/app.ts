import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"
import { errorHandler } from "./error";
import { mainRoutes } from "./routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use(mainRoutes)

app.use(errorHandler)

export default app;
