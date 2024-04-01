import Wine from "../models/wine.js";

export const getAddWine = (req, res) => {
  res.render("add-wine", { pageTitle: "Add Wine" });
};

export const postAddWine = async (req, res) => {
  try {
    await Wine.create({ ...req.body });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const getWines = async (req, res) => {
  try {
    const wines = await Wine.findAll();
    res.render("index", {
      pageTitle: "Wine List",
      wines: wines,
    });
  } catch (error) {
    console.log(error);
  }
};
