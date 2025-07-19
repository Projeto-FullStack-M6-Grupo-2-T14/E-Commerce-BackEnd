import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataSourceConfig = (): DataSourceOptions => {
	const nodeEnv: string | undefined = process.env.NODE_ENV;

	if (nodeEnv === "test") {
		return {
			type: "sqlite",
			database: ":memory:",
			synchronize: true,
			entities: [join(__dirname, "./entities/**.ts")],
		};
	}

	const dbUrl: string | undefined = process.env.DATABASE_URL;
	if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

	const isDevelopment = nodeEnv === "development";
	const rootDir = isDevelopment ? "src" : "dist";
	const extension = isDevelopment ? "ts" : "js";

	return {
		type: "postgres",
		url: dbUrl,
		synchronize: false,
		logging: true,
		entities: [join(__dirname, `../${rootDir}/entities/**.${extension}`)],
		migrations: [join(__dirname, `../${rootDir}/migrations/**.${extension}`)],
		schema: "public",
	};
};

export const AppDataSource = new DataSource(dataSourceConfig());
