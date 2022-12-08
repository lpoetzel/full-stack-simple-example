const connection = require("../../db");

const getCategoryById = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select categories.category_id, categories.title, images.url as image from categories join images on categories.image_id = images.image_id where categories.category_id = ? ";
  const { id } = req.params;
  connection
    .promise()
    .query(query, [id])
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};

module.exports = getCategoryById;
