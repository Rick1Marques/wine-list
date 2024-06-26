import { Router } from "express";
import * as controllers from "../controllers/controllers.js";

import Wine from "../models/wine.js";

const router = Router();

router.get("/add-wine", controllers.getAddWine);

router.post("/add-wine", controllers.postAddWine);

router.get("/", controllers.getWines);

router.post("/delete-wine", controllers.postDeleteWine);

router.get("/edit-wine/:wineId", controllers.getEditWine);

router.post("/edit-wine", controllers.postEditWine);

export default router;
