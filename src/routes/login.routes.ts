import { Router } from "express";
import generateTokenController from "../controllers/login.controllers.js";

const loginRoutes = Router();

loginRoutes.post("", generateTokenController);

export default loginRoutes;
