const connection = require("../../db");

const getProductById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "SELECT products.product_id, products.title, products.price, images.url as image, categories.title AS category FROM products JOIN images ON products.image_id = images.image_id JOIN categories ON products.category_id = categories.category_id WHERE products.product_id= ?";
  const { id } = req.params;
  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      if (!results.length) {
        res.status(404).send({
          status: "404",
          message: "Not found",
          data: null,
        });
      }
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getProductById;
