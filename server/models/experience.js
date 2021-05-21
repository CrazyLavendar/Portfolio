const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, unique: true },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    title: String,
    years: String,
    mainTech: {
      type: Array,
      default: [],
    },
    technologies: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Experience", experienceSchema);
