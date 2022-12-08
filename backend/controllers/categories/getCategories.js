const connection = require("../../db");

const getCategories = async (req, res) => {
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select categories.category_id, categories.title, images.url as image from categories join images on categories.image_id = images.image_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getCategories;
