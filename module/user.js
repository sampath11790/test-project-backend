const Sequelize = require("sequelize");

const sequelize = require("../utli/database");

const User = sequelize.define("product-admin", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});
