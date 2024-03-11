const express = require("express");

//Appel des fonctions dans le fichier meubles.controllers.js
const {
  createFurniture,
  updateFurniture,
  deleteFurniture,
  getFurniture,
  getFurnitureById,
} = require("../controllers/meubles.controllers");

//Initialisation du routeur express
const router = express.Router();

// Error handling middleware
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong" });
});

//READ : renvoie un message JSON de tous les meubles
router.get("/", getFurniture);

//READ : renvoie un message JSON d'un meuble en particulier
router.get("/:productId", getFurnitureById);

//CREATE : créer un meuble
router.post("/", createFurniture);

//UPDATE : avec l'id spécifique du meuble.
// Le message correspond à req.params.id
router.put("/:productId", updateFurniture);

//DELETE : avec l'id spécifique du meuble.
router.delete("/:productId", deleteFurniture);

module.exports = router;
