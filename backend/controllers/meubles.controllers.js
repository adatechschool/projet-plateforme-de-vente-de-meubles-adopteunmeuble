const MeublesModel = require("../models/meubles.models");

// * FONCTION OK !
module.exports.getFurniture = async (req, res, next) => {
    try {
        throw new Error("erreur volontaire")
        const meubles = await MeublesModel.findAll();
        res.status(200).json(meubles);
    } catch (error) {
        next(error)
        // res.status(500).json({ error: error.message });
    }
};

module.exports.getFurnitureById = async (req, res) => {
    try {
        const furnitureItem = await MeublesModel.findByPk(req.params.productId);
        if (!furnitureItem) {
            return res.status(404).json({ error: "Furniture item not found" });
        }
        res.send(furnitureItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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

module.exports.updateFurniture = async (req, res) => {
    try {
        const updatedFurnitureItem = await MeublesModel.update(
            {
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
                // req.body.author
            },
            {
                where: { id: req.params.id },
            }
        );
        if (!updatedFurnitureItem) {
            return res.status(404).json({ error: "Furniture item not found" });
        }
        res.status(200).json("Fiche produit mise à jour !");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.deleteFurniture = async (req, res) => {
    try {
        const deletedFurnitureItem = await MeublesModel.destroy({
            where: { id: req.params.id },
        });
        if (!deletedFurnitureItem) {
            return res.status(404).json({ error: "Furniture item not found" });
        }
        res.send({ message: "Furniture item deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
