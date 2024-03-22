import express from "express";
import cors from "cors";
import bodyParser from "body-parser"
import routes from "./routes";
import { sequelize } from "./config/Database/db";

const app = express();

const PORT = 3002

app.use(express.json());
app.use(cors({origin: "*"}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api", routes)

app.listen(PORT, ()=> {
    console.log("Servidor OK")
})

sequelize.authenticate();