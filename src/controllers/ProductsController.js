const ProductsModel = require("../models/ProductsModel");

exports.productList = async (req, res) => {
  try {
    let pageNo = Number(req.params.pageNo);
    let perPage = Number(req.params.perPage);
    let searchValue = req.params.searchKey;
    const skipRow = (pageNo - 1) * perPage;
    let Total;
    let Rows;
    if (searchValue !== "0") {
      let searchRgx = { $regex: searchValue, $options: "i" };
      let searchQuery = { $or: [{ title: searchRgx }] };
      Total = await ProductsModel.aggregate([
        { $match: searchQuery },
        { $count: "total" },
      ]);
      Rows = await ProductsModel.aggregate([
        { $match: searchQuery },
        { $skip: skipRow },
        { $limit: perPage },
      ]);
    } else {
      Total = await ProductsModel.aggregate([{ $count: "total" }]);
      Rows = await ProductsModel.aggregate([
        { $skip: skipRow },
        { $limit: perPage },
      ]);
    }

    res.status(200).json({ status: "success", total: Total, data: Rows });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};
