//code Sequelize pour l'initiation de la base de données avec une nouvelle importation pour DataTypes et la création d'un modèle pour la table meubles
const { Sequelize, DataTypes } = require("sequelize");

//Importation de la connexion à la base de données
const sequelize = require("../config/createDB");

const Photo = sequelize.define(
  "photo",
  {
    id_item: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    photo_rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    src: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Photo;