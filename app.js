import express from "express";
import path from "path";
import bodyParser from "body-parser";
import routes from "./routes/routes.js";
import sequelize from "./lib/db.js";
import Wine from "./models/wine.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

async function startServer() {
  try {
    await sequelize.sync();
    app.listen(3000);
  } catch (error) {
    console.log(error);
  }
}

startServer();
