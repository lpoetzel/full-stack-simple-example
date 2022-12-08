const connection = require("../../db");

const getProducts = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select products.product_id, products.title, products.price, images.url, categories.title as category from products join images on products.image_id = images.image_id join categories on products.category_id = categories.category_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getProducts;
