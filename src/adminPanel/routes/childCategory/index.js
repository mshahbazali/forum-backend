const {
  allCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  getCount,
} = require("../../controller/childCategory");
const { checkInfo } = require("../../middlewares/mainCategory");

const router = require("express").Router();

router.get("/all", allCategories);
router.post("/add", checkInfo, addCategory);
router.patch("/update", updateCategory);
router.delete("/delete", deleteCategory);
router.get("/count", getCount);

module.exports = router;
