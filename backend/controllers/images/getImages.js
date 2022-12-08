const connection = require("../../db");

const getImages = async (req, res, next) => {
  if (Object.keys(req.query).length) {
    return next();
  }
  // write a query that returns values from multiple tables
  // hint : you have to use JOIN
  const query =
    "select images.image_id,images.title, images.url as image, products.title as product, categories.title AS category from images left join products on products.product_id = images.product_id left join categories on categories.category_id = images.category_id";
  connection
    .promise()
    .query(query)
    .then(([results]) => {
      res.send(results);
    })
    .catch((e) => console.log(e));
};
module.exports = getImages;
