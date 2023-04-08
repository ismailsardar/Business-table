const { default: axios } = require("axios");
const DameJson = require("../models/ProductsModel");
const BaseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json";

exports.employList = async (req, res) => {
  try {
    // let data = await DameJson.find({});
    let { data } = await axios.get(BaseUrl);
    console.log(data.length);
    // await data.map((item) =>
    //   DameJson.create({
    //     name: item.name,
    //     brand: item.brand,
    //     price: item.price,
    //     image_link: item.image_link,
    //     description: item.description,
    //     category: item.category,
    //   })
    // );
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

exports.productList = async (req, res) => {
  try {
    const pageNo = Number(req.params.pageNo);
    const perPage = Number(req.params.perPage);
    const searchValue = req.params.searchKey;
    const skipRow = (pageNo - 1) * perPage;
    let Rows;
    let Total;
  
    const searchQuery = searchValue !== "0" ?
      { $or: [{ name: { $regex: searchValue, $options: "i" } }] } :
      {};
  
    Total = (await DameJson.aggregate([{ $match: searchQuery }, { $count: "total" }]))[0]?.total || 0;
  
    Rows = await DameJson.aggregate([
      { $match: searchQuery },
      { $skip: skipRow },
      { $limit: perPage }
    ]);
  
    res.status(200).json({ status: "success", total: Total, data: Rows });
  
  } catch (error) {
    res.status(500).json({status: "fail",error: error.message });
  }
};
