import sequelize from "../lib/db.js";
import { DataTypes } from "sequelize";

const Wine = sequelize.define("wine", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  grape: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Wine;
