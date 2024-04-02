import Wine from "../models/wine.js";

export const getAddWine = (req, res) => {
  res.render("edit-wine", { pageTitle: "Add Wine", edit: false });
};

export const postAddWine = async (req, res) => {
  try {
    console.log("add-wine", req.body);
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

export const postDeleteWine = async (req, res) => {
  try {
    const wineId = req.body.wineId;
    await Wine.destroy({ where: { id: wineId } });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const getEditWine = async (req, res) => {
  try {
    const edit = req.query.edit;
    console.log(edit);
    const wineId = req.params.wineId;
    const wine = await Wine.findByPk(wineId);
    res.render("edit-wine", { wine: wine, edit: edit, pageTitle: "Edit Wine" });
  } catch (error) {
    console.log(error);
  }
};
export const postEditWine = async (req, res) => {
  try {
    const updatedWine = req.body;
    const oldWine = await Wine.findByPk(req.body.wineId);

    oldWine.name = updatedWine.name;
    oldWine.type = updatedWine.type;
    oldWine.grape = updatedWine.grape;
    oldWine.country = updatedWine.country;
    oldWine.region = updatedWine.region;
    oldWine.year = updatedWine.year;
    oldWine.producer = updatedWine.producer;
    oldWine.abv = updatedWine.abv;
    oldWine.description = updatedWine.description;
    oldWine.imageUrl = updatedWine.imageUrl;
    oldWine.rate = updatedWine.rate;

    await oldWine.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
