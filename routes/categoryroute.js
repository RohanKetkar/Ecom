const express = require("express");
const { requireSignin, isadmin } = require("../middleware/authmiddleware");
const {
  createcategory,
  updatecategory,
  getallcategory,
  deletecategory,
  singlecategory,
} = require("../controller/categorycontroller");

const router = express.Router();
router.post("/create-category", requireSignin, isadmin, createcategory);
router.put("/category-update/:id", requireSignin, isadmin, updatecategory);
router.get("/all-category", getallcategory);
router.delete("/delete-category/:id", requireSignin, isadmin, deletecategory);
router.get("/single-category/:name", singlecategory);
module.exports = router;
