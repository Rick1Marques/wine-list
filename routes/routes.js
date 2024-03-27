import { Router } from "express";

const router = Router();

router.get("/add-wine", (req, res) => {
  res.render("add-wine", { pageTitle: "Add Wine" });
});

export default router;
