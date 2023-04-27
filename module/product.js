const Sequelize = require("sequelize");
// const sequelize = require("../util/database");
const sequelize = require("../utli/database");

const Product = sequelize.define("products-test", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
