const MeublesModel = require("../models/meubles.models");
const PhotoModel = require("../models/photo.models");

module.exports.getFurniture = async (req, res, next) => {
    try {
        // console.log("ouiiiiiii");
        const photoItems = await PhotoModel.findAll({
            where: { photo_rank: 1 },
        });
        // console.log("photoItems:", photoItems);
        // console.log("ok requête photo");
        const meubles = await MeublesModel.findAll();
        // console.log("ok requête meubles");
        // console.log("meuble 0", meubles[0].picture);
        const newMeubles = meubles.map((meuble) => {
            // console.log(meuble.id);
            meuble["picture"] = photoItems.find(
                (photo) => photo.id_item === meuble.id
            );
            return meuble.picture;
        });
        // console.log("resultat filtre", newMeubles);
        res.status(200).json(meubles);
    } catch (error) {
        next(new Error("Impossible de récupérer les données", { cause: 404 }));
        // res.status(500).json({ error: error.message });
    }
};

module.exports.getFurnitureById = async (req, res, next) => {
    // try {
    const photoItems = PhotoModel.findAll({
        where: { id_item: req.params.productId },
    });
    const furnitureItem = await MeublesModel.findByPk(req.params.productId);
    furnitureItem["picture"] = await photoItems;
    if (!furnitureItem) {
        throw new Error();
        // res.status(404).json({ error: "Furniture item not found" });
    }
    res.json(furnitureItem);
    // } catch (error) {
    //   next(new Error("Impossible de récupérer les données", { cause: 404 }));
    //   // res.status(500).json({ error: error.message });
    // }
};

module.exports.createFurniture = async (req, res) => {
    //Sécurité pour vérifier si le nom du meuble est vide
    try {
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
    } catch (error) {
        next(error);
    }
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
        next(error);
        // res.status(err.statusCode || 500).json({ error: error.message });
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
        netx(error);
        // res.status(500).json({"error": error.message});
    }
};
