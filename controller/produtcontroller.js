const productmodel = require("../model/productmodel");
const fs = require("fs");
const slugify = require("slugify");

exports.creatproduct = async (req, res) => {
  try {
    const { name, slug, description, price, category, shipping, quantity } =
      req.fields;
    const { photo } = req.files;

    switch (true) {
      case !name:
        return res.status(500).send({ message: "namerequired" });
      case !description:
        return res.status(500).send({ message: "descriptionrequired" });
      case !category:
        return res.status(500).send({ message: "categoryrequired" });
      case !price:
        return res.status(500).send({ message: "pricerequired" });
      case !quantity:
        return res.status(500).send({ message: "quantityerequired" });
      case photo && photo.size >> 100000:
        res.status(500).send({
          message: "photorequired",
        });
    }
    const product = new productmodel({ ...req.fields, slug: slugify(name) });
    console.log(product);
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(200).send({
      success: true,
      message: "check",
      product,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.getallproduct = async (req, res) => {
  try {
    let product = await productmodel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      message: "success",
      product,
      total: product.length,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.getpaginated = async (req, res) => {
  try {
    // let posts = await productmodel.find()
    // let {page} = req.params

    // const pageCount = Math.ceil(posts.length / 10);
    //   let page = parseInt(req.query.p);
    //   if (!page) { page = 1;}
    //   if (page > pageCount) {
    //     page = 0
    //   }
    console.log("initial");
    const no_of_docs_each_page = 4; // 2 docs in single page
    const current_page_number = 0; // 3rd page
    const a = await productmodel
      .find()
      .select("-photo")
      .skip(no_of_docs_each_page * current_page_number)
      .limit(no_of_docs_each_page);
    res.json({
      page: 0,
      pageCount: 0,
      posts: a,
    });

    console.log(a);
  } catch (e) {
    res.status(500).send({
      message: "Errpr",
    });
    console.log(e);
  }
};
exports.getsingleproduct = async (req, res) => {
  try {
    let { slug } = req.params;
    let product = await productmodel.findOne({ slug }).populate("category");

    res.status(200).send({
      message: "success",
      product,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
exports.productphoto = async (req, res) => {
  try {
    let { pid } = req.params;
    let product = await productmodel.findById(pid).select("photo");
    if (product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (e) {
    console.log(e);
    res.status(200).send({
      mssage: "error",
    });
  }
};

exports.deleteproduct = async (req, res) => {
  try {
    let { name } = req.params;
    let { id } = req.params;
    let productid = await productmodel.findById(id);
    let product = await productmodel.findOneAndDelete(
      productid,
      { name },
      { new: true }
    );
    res.status(200).send({
      message: "success",
      product,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "error",
    });
  }
};

exports.updateproduct = async (req, res) => {
  try {
    const { name, slug, description, price, category, shipping, quantity } =
      req.fields;
    let { id } = req.params;
    let productid = await productmodel.findById(id);
    if (productid) {
      let product = await productmodel.findByIdAndUpdate(
        productid,
        { ...req.fields, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        message: "true",
        product,
      });
    } else {
      return res.send({
        message: "check",
      });
    }
    //    let product = await productmodel.findByIdAndUpdate(id,{ ...req.fields,  slug:slugify(name)},{new:true})
    //    if(!product){
    //     return res.status(200).send({
    //         message:"check product"
    //     })
    // }

    //    res.status(200).send({
    //     message:"success",
    //     product
    //    })
  } catch (e) {
    console.log(e);
    res.status(200).send({
      message: "check",
    });
  }
};

exports.productFiltersController = async (req, res) => {
  try {
    const { checke, radior } = req.body;
    let args = {};
    if (checke.length > 0) args.category = checke;
    if (radior.length) args.price = { $gte: radior[0], $lte: radior[1] };
    const product = await productmodel.find(args);
    res.status(200).send({
      success: true,
      product,
      args,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering Products",
      error,
    });
  }
};
