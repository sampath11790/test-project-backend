const express = require("express");

const app = express();
const cors = require("cors");
const ExpenseRouter = require("./router/product");
const sequelize = require("./utli/database");

// const ExpenseModule = require("./module/Expense");
const product = require("./module/product");
const Adminuser = require("./module/user");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json({ extended: false }));
// Adminuser.has(product);
// app.use((req, res, next) => {
//   console.log("req.body", req.body.name);
//   next();
// });
app.use(ExpenseRouter);

sequelize
  // .sync({ force: true })
  .sync()
  .then((data) => {
    app.listen(5000);
  })
  .catch((err) => console.log("err errer message ", err));
