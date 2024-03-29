//code Sequelize pour l'initiation de la base de données avec une nouvelle importation pour DataTypes et la création d'un modèle pour la table meubles
const { Sequelize, DataTypes } = require("sequelize");

//Importation de la connexion à la base de données
// const sequelize = require("../config/createDB");
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
);

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
