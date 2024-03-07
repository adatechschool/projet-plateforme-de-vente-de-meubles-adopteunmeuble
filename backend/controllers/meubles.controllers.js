const MeublesModel = require("../models/meubles.models");

// * FONCTION OK !
module.exports.getFurniture = async (req, res) => {
  try {
    const meubles = await MeublesModel.findAll();
    res.status(200).json(meubles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ! Requête non-fonctionnelle, affiche l'erreur : "MeublesModel.findById is not a function
module.exports.getFurnitureById = async (req, res) => {
  try {
    const furnitureItem = await MeublesModel.findById(req.params.id);
    if (!furnitureItem) {
      return res.status(404).json({ error: "Furniture item not found" });
    }
    res.send(furnitureItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// * FONCTION OK !
module.exports.createFurniture = async (req, res) => {
  //Sécurité pour vérifier si le nom du meuble est vide
  if (!req.body.name) {
    return res.status(400).json({ message: "Le message est vide !" });
  }

  const meuble = await MeublesModel.create({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    picture: req.body.picture,
    description: req.body.description,
    color: req.body.color,
    dimensions: req.body.dimensions,
    material: req.body.material,
    condition: req.body.condition,
    status: req.body.status,
    author: req.body.author,
  });

  res.status(201).json(meuble);
};

// ! Requête non-fonctionnelle, dans postman affiche l'erreur : "Error : Cannot PUT"
module.exports.updateFurniture = async (req, res) => {
  try {
    const updatedFurnitureItem = await MeublesModel.update(
      req.params.id,
      req.body.name,
      req.body.category,
      req.body.price,
      req.body.picture,
      req.body.description,
      req.body.color,
      req.body.dimensions,
      req.body.material,
      req.body.condition,
      req.body.status,
      req.body.author
    );
    if (!updatedFurnitureItem) {
      return res.status(404).json({ error: "Furniture item not found" });
    }
    res.send(updatedFurnitureItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ! Ne fonctionne pas, affiche l'erreur : "error": "Missing where or truncate attribute in the options parameter of model.destroy."
module.exports.deleteFurniture = async (req, res) => {
  try {
    const deletedFurnitureItem = await MeublesModel.destroy(req.params.id);
    if (!deletedFurnitureItem) {
      return res.status(404).json({ error: "Furniture item not found" });
    }
    res.send({ message: "Furniture item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
