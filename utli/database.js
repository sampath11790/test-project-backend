const Sequelize = require("sequelize");

const sequelize = new Sequelize("new_schema", "root", "nandhu11*8", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
