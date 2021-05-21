const Experience = require("../models/experience");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.company);
    const newExp = await new Experience(req.body).save();
    res.json(newExp);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.read = async (req, res) => {
  try {
    console.log(req.body);
    let allExperiences = await Experience.find({})
      .sort([["createdAt", "desc"]])
      .exec();
    res.json(allExperiences);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.readOne = async (req, res) => {
  try {
    console.log(req.body);
    let allExperiences = await Experience.findOne({
      slug: req.params.slug,
    }).exec();

    res.json(allExperiences);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.update = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.company);
    const updated = await Experience.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Experience.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    return res.staus(400).send("Experience delete failed");
  }
};
