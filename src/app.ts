import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import cors from "cors"
import { errorHandler } from "./error";
import postersRoutes from "./routes/posters.routes"
import usersRoutes from "./routes/users.routes";
import addressRoutes from "./routes/address.routes";
import { loginRoutes } from "./routes/login.routes";

const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/posters", postersRoutes)
app.use("/users", usersRoutes)
app.use("/address", addressRoutes)
app.use("/login", loginRoutes)

app.use(errorHandler)

export default app;
