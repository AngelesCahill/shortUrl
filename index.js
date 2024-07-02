import express from "express";
import { create } from "express-handlebars";
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

//views
app.use("/", homeRouter);
app.use("/", loginRouter);


app.use(express.static(__dirname + "/public"));

app.listen(3000, () => {
    console.log("Server listening port 3000");
});
