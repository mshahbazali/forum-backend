const {
  allCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../../controller/mainCategory");
const { checkInfo } = require("../../middlewares/mainCategory");

const router = require("express").Router();

router.get("/all", allCategories);
router.post("/add", checkInfo, addCategory);
router.patch("/update", updateCategory);
router.delete("/delete", deleteCategory);

module.exports = router;
