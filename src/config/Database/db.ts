import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    "contlab",
    "root",
    "",
    {
        host: "localhost",
        dialect: "mysql"
    }
)