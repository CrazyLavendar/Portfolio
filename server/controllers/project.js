const Project = require("../models/project");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.title);
    const newProj = await new Project(req.body).save();
    res.json(newProj);
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
    let allProjects = await Project.find({})
      .sort([["createdAt", "desc"]])
      .populate("technologies")
      .exec();
    res.json(allProjects);
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
    let oneProject = await Project.findOne({
      slug: req.params.slug,
    })
      .populate("technologies")
      .exec();

    res.json(oneProject);
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
    req.body.slug = slugify(req.body.title);
    const updated = await Project.findOneAndUpdate(
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
    const deleted = await Project.findOneAndRemove({
      slug: req.params.slug,
    }).exec();
    res.json(deleted);
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};
