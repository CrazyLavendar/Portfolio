const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const techSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      required: "class is required",
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("techs", techSchema);
