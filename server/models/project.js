const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const projectSchema = new mongoose.Schema(
  {
    title: { type: String, unique: true },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    startDate: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
    },
    url: { type: String },
    technologies: [
      {
        type: ObjectId,
        ref: "techs",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
