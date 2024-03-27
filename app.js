import express from "express";

import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

import bodyParser from "body-parser";

import routes from "./routes/routes.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(3000);
