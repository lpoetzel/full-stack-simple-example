const connection = require("../../db");

const getProducts = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT products.product_id, products.title, products.price, images.url, categories.title AS category FROM products JOIN images ON products.image_id = images.image_id JOIN categories ON products.category_id = categories.category_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getProducts;
