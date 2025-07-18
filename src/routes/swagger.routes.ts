import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "../swagger.json.js";

const swaggerRoutes: Router = Router();

swaggerRoutes.use("", swaggerUi.serve);
swaggerRoutes.use("", swaggerUi.setup(swaggerDocs));

export default swaggerRoutes;
