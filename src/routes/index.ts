import { Router } from "express";
import loginRoutes from "./login.routes";
import usersRoutes from "./users.routes";
import addressRoutes from "./address.routes";
import postersRoutes from "./posters.routes";
import userPosterRoutes from "./userPosters.routes";
import commentsRoutes from "./comments.routes";
import swaggerRoutes from "./swagger.routes";

export const mainRoutes: Router = Router();

mainRoutes.use("/login", loginRoutes)
mainRoutes.use("/users", usersRoutes)
mainRoutes.use("/address", addressRoutes)
mainRoutes.use("/posters", postersRoutes)
mainRoutes.use("/users/posters", userPosterRoutes)
mainRoutes.use("/comments", commentsRoutes)
mainRoutes.use("/api-docs", swaggerRoutes)