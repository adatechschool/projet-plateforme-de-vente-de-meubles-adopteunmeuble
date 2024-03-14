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
//Le sequelize.define() définit un nouveau modèle, qui représente un tableau dans la base de données.
//Si vous avez besoin de définir une valeur, vous pouvez utiliser defaultValue: "value"

const Furniture = sequelize.define(
  "furniture",
  {
    // defines a new model, which represents a table in the database
    name: {
      type: DataTypes.STRING,
      allowNull: false, // shows that the model column value cannot be null
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    dimensions: {
      type: DataTypes.INTEGER,
    },
    material: {
      type: DataTypes.STRING,
    },
    item_condition: {
      type: DataTypes.STRING,
    },
    item_status: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

//Demande à Sequelize de faire quelques choses à la base de données :
//Avec cet appel, Sequelize effectuera automatiquement une requête SQL à la base de données
sequelize
  .sync()
  .then(() => {
    console.log("Meubles table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

module.exports = Furniture;
