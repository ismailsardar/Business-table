const express = require("express");
const { productList, employList } = require("../controllers/ProductsController");
const router = express.Router();

router.get("/productList/:pageNo/:perPage/:searchKey", productList);
router.get("/productList", employList);

module.exports = router;
