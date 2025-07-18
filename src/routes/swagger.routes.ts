import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "../swagger.json" with { type: "json" };

const swaggerRoutes: Router = Router();

swaggerRoutes.use("", swaggerUi.serve);
swaggerRoutes.use("", swaggerUi.setup(swaggerDoc));

export default swaggerRoutes;
