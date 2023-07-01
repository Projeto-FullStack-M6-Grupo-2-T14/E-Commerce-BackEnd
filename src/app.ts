import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"
import { errorHandler } from "./error";
import { mainRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json"

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(mainRoutes)

app.use(errorHandler)

export default app;
