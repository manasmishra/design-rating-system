const AsyncRouter = require("express-async-router").AsyncRouter;
const router = AsyncRouter();
const jsonParser = require("body-parser").json();
const validate = require("express-validation");
const schema = require("./schema");
const deserialize = require("../lib/middleware/to-camel-case");
const { getProductsByRating, getProductList } = require("./controller");

router.use(jsonParser);
router.use(validate({ body: schema }));
router.use(deserialize);

router.get("/products", async (req, res) => {
  const products = await getProductList();
  return res.status(products ? 200 : 404).json(products);
});

router.get("/:rate_status", async (req, res) => {
  const rateStatus = req.params.rate_status;
  const userId = req.headers.user_id;
  const ratings = await getProductsByRating({rateStatus, userId});
  return res.status(ratings ? 200 : 404).json(ratings);
});

module.exports = router;
