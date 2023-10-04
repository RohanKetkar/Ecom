const slugify = require("slugify");

const categorymodel = require("../model/categorymodel");

exports.createcategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(200).send({
        message: "name required",
      });
    }
    const existingcategory = await categorymodel.findOne({ name });
    if (existingcategory) {
      //  conflic
      return res.status(200).send({
        message: "category existi",
      });
    }
    let category = await new categorymodel({
      name,
      slug: slugify(name),
    }).save();
    res.status(200).send({
      message: "createcategory",
      success: true,
      category,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.updatecategory = async (req, res) => {
  try {
    let { name } = req.body;
    let { id } = req.params;
    let category = await categorymodel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      message: "success",
      category,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.getallcategory = async (req, res) => {
  try {
    let category = await categorymodel.find();
    res.status(200).send({
      success: true,
      category,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.deletecategory = async (req, res) => {
  try {
    let { id } = req.params;
    let allcategory = await categorymodel.findById(id);
    if (!allcategory) {
      return res.status(404).send({
        message: "check",
      });
    }
    let category = await categorymodel.findByIdAndDelete(id, { new: true });

    res.status(200).send({
      message: "success",
      category,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.singlecategory = async (req, res) => {
  try {
    let { name } = req.params;
    let category = await categorymodel.findOne({ slug: slugify(name) });
    if (!category) {
      return res.staus(200).send({
        message: "check categor",
      });
    }
    res.status(200).send({
      message: "check",
      category,
    });
  } catch (e) {
    console.log(e);
  }
};
