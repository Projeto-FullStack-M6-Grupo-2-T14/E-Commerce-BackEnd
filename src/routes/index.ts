import { Router } from "express";
import loginRoutes from "./login.routes.js";
import usersRoutes from "./users.routes.js";
import addressRoutes from "./address.routes.js";
import postersRoutes from "./posters.routes.js";
import userPosterRoutes from "./userPosters.routes.js";
import commentsRoutes from "./comments.routes.js";
import swaggerRoutes from "./swagger.routes.js";

export const mainRoutes: Router = Router();

mainRoutes.use("/login", loginRoutes);
mainRoutes.use("/users", usersRoutes);
mainRoutes.use("/address", addressRoutes);
mainRoutes.use("/posters", postersRoutes);
mainRoutes.use("/users/posters", userPosterRoutes);
mainRoutes.use("/comments", commentsRoutes);
mainRoutes.use("/api-docs", swaggerRoutes);
