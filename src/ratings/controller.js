const {
  getProductsByRating: getProductsByRating,
  getAllPrpducts: getAllPrpducts
} = require("./model");

module.exports.getProductsByRating = async ({ rateStatus, userId }) => {
  const ratings = await getProductsByRating(rateStatus, userId);
  return ratings;
};

module.exports.getProductList = async () => {
  const products = await getAllPrpducts();
  return products;
}
