import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";

const AppDataSource = new DataSource({
    type: "mongodb",
    host: process.env.DB_HOST,
    port: 27017,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [path.join(__dirname, "..", "models", "*.ts")]
});

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });

export default AppDataSource;
