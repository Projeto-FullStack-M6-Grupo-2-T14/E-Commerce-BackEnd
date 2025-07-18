import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const swaggerPath = resolve(__dirname, "../swagger.json");

const swaggerDoc = JSON.parse(readFileSync(swaggerPath, "utf-8"));

const swaggerRoutes: Router = Router();

swaggerRoutes.use("", swaggerUi.serve);
swaggerRoutes.use("", swaggerUi.setup(swaggerDoc));

export default swaggerRoutes;
