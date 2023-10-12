const express = require("express");
const { requireSignin, isadmin } = require("../middleware/authmiddleware");
const {
  creatproduct,
  getallproduct,
  getpaginated,
  getsingleproduct,
  productphoto,
  deleteproduct,
  updateproduct,
  productFiltersController,
} = require("../controller/produtcontroller");

const formidable = require("express-formidable");

const router = express.Router();

router.get("/getallproduct", getallproduct);
router.post(
  "/create-product",
  requireSignin,
  isadmin,
  formidable(),
  creatproduct
);
router.get("/paginated/:page", getpaginated);
router.get("/singleproduct/:slug", getsingleproduct);
router.get("/productphoto/:pid", productphoto);
router.delete("/delete-product/:name", requireSignin, isadmin, deleteproduct);
router.put(
  "/update-product/:id",
  requireSignin,
  isadmin,
  formidable(),
  updateproduct
);
router.post("/filter", productFiltersController);

module.exports = router;
