require("dotenv").config({ debug: true });
const { Sequelize, DataTypes } = require("sequelize");

//Initialisation de la connexion primaire à la base de données via Sequelize
const sequelizeInit = new Sequelize(
  "sys",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
);

sequelizeInit.query("CREATE DATABASE IF NOT EXISTS `plateforme_de_meubles`;");

// TODO Connexion à la BDD plateforme_de_meubles (via le fichier .env à créer !)
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { dialect: "mysql", host: process.env.DB_HOST, port: process.env.DB_PORT }
);

const Furniture = sequelize.define("furniture", {
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
  condition: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
});

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

// ? Sequelize will automatically perform an SQL query to the database and create a table, printing the message Book table created successfully!
// ? Vérifier l'utilité de la fonction !
sequelize.sync()
  .then(() => {
    console.log("Furniture table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

//Effectue un test de connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connecté à la base de données MySQL !");
  } catch (error) {
    console.error("Impossible de se connecter à la base de données :", error);
  }
}
testConnection();

//Exporte la connexion à la base de données
module.exports = sequelize;
