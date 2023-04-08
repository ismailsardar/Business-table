const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema(
  {
    name: { type: String },
    brand: { type: String },
    price: { type: String },
    image_link: { type: String },
    description: { type: String },
    category: { type: String },
  },
  { versionKey: false }
);

const DameJson = mongoose.model("demoJSON", DataSchema);
module.exports = DameJson;
