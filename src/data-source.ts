import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = join(__dirname, "./entities/**.js");
    const migrationPath: string = join(__dirname, "./migrations/**.js");

    const nodeEnv: string | undefined = process.env.NODE_ENV;

    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiesPath],
        };
    }

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationPath],
        schema: "public",
    };
};

export const AppDataSource = new DataSource(dataSourceConfig());