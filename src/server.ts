import "reflect-metadata";
import app from "./app.js";
import "dotenv/config";
import { AppDataSource } from "./data-source.js";

AppDataSource.initialize()
	.then(() => {
		console.log("database is connected");
		const PORT = process.env.PORT || 3008;
		app.listen(PORT, () => {
			console.log(`Server is running on ${PORT}`);
		});
	})
	.catch((error) => console.log(error));
