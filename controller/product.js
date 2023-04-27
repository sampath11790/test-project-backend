const Product = require("../module/product");

exports.getComment = (req, res, next) => {
  Product.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postProduct = (req, res, next) => {
  const name = req.body.name;
  const amount = req.body.amount;
  Product.create({
    name: name,
    amount: amount,
  })
    .then((data) => {
      console.log(data);
      res.json({ messsage: "success" });
    })
    .catch((err) => console.log(err));

  // console.log(req);
  console.log("controller");
};
exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((data) => {
      return data.destroy();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));

  // console.log(req);
  console.log("controller");
};
