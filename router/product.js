const express = require("express");
const Expense = require("../controller/product");

const router = express.Router();
router.get("/", Expense.getComment);
router.post("/post-product", Expense.postProduct);
router.delete("/post-product/:productId", Expense.deleteProduct);

module.exports = router;
