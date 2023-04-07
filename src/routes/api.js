const express = require("express");
const { productList } = require("../controllers/ProductsController");
const router = express.Router();

router.get("/ProductList/:pageNo/:perPage/:searchKey", productList);

module.exports = router;
