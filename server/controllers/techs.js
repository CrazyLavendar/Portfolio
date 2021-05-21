const slugify = require("slugify");
const techs = require("../models/techs");

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    req.body.slug = slugify(req.body.name);
    //const category = await new Category({ name, slug: slugify(name) }).save();
    const newTech = await new techs(req.body).save();
    res.json(newTech);
  } catch (error) {
    console.log("Tech create  error", error);
    res.status(400).send("Create Tech  failed");
  }
};

exports.list = async (req, res) => {
  try {
    console.log(req.body);
    let technologies = await techs
      .find({})
      .sort([["createdAt", "desc"]])
      .exec();
    res.json(technologies);
  } catch (err) {
    console.log(err);
    // res.status(400).send("Create product failed");
    res.status(400).json({
      err: err.message,
    });
  }
};
// list all

// exports.read = async (req, res) => {
//   let sub = await Sub.findOne({ slug: req.params.slug }).exec(); // .slug is same router .put "xxx/:slug"
//   res.json(sub);
// };
// exports.update = async (req, res) => {
//   const { name, parent } = req.body;
//   try {
//     const updated = await Sub.findOneAndUpdate(
//       {
//         slug: req.params.slug, // to find
//       },
//       { name, parent, slug: slugify(name) }, // to update
//       {
//         new: true, //optional
//       }
//     );
//     res.json(updated);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send("Update sub failed");
//   }
// };
// exports.remove = async (req, res) => {
//   try {
//     const deleted = await Sub.findOneAndDelete({ slug: req.params.slug });
//     res.json(deleted);
//   } catch (error) {
//     res.status(400).send("delete sub failed");
//   }
// };
