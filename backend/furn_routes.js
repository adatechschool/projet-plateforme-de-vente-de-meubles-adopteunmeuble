const express = require("express");
const {
  setFurn,
  getFurn,
  editFurn,
  deleteFurn,
} = require("./furn_controller.js");
const router = express.Router();

router.get("/", getFurn);
router.post("/", setFurn);
router.put("/:id", editFurn);
router.delete("/:id", deleteFurn);

module.exports = router;