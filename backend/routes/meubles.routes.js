const express = require("express");
const router = express.Router();

//READ : renvoie un message JSON
router.get("/", (req, res) => {
  res.json({ message: "Hello World from /get" });
});

//CREATE
router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message });
});

//UPDATE : avec l'id spécifique du meuble.
// Le message correspond à req.params.id
router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

//DELETE : avec l'id spécifique du meuble.
router.delete("/:id", (req, res) => {
  res.json({ message: "Id Meuble supprimé : " + req.params.id });
});

module.exports = router;
