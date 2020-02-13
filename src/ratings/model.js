const db = require("./database")();

const getProductsByRating = async (rateStatus, userId) => {
  return await db.getProductsByRating(rateStatus, userId) || 0;
}

const getAllPrpducts = async () => {
  return await db.getAllPrpducts() || 0;
}
module.exports.getProductsByRating = getProductsByRating;
module.exports.getAllPrpducts = getAllPrpducts;
