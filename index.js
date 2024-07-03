import express from "express";
import { create } from "express-handlebars";
import "dotenv/config";
import "./database/configdb.js";
import homeRouter from "./routes/home.route.js";
import loginRouter from "./routes/auth.route.js";

const app = express();

//config hbs
const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");

//Fix para __dirname
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//middlewares
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

//views
app.use("/", homeRouter);
app.use("/", loginRouter);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server listening port 3000");
});
