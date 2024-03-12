# Détail du projet :

### Plateforme de meubles avec :
Une page de sommaire / choix parmi les meubles
Accès aux fiches clients
Page "admin" pour gestion du stock et des produits
comptes utilisateurs / authentification

### Définition du MVP :
MVP = 2 pages / 1 BDD de meubles avec données mini avec deux requêtes : une requête "ensemble du catalogue" / une requête fiche article
Page qui afficher une liste de meuble (sans forcément de meuble)
Une page de détail pour le meuble
avec bouton vente, mais sans forcément la page derrière

### Etapes optionnelles :
1 page administrateur avec la gestion du stock
1 page de login
1 page ajout de meuble
Fonctionnalité de filtre sur la page d'affichage du catalogue de meubles

# Aspects techniques

### Définition de la stack :
Front : REACT
Back : Node + Express
BDD :  mySQL

### Requêtes :
page principale : nom, prix, photo, catégorie, pour l'ensemble des meubles au catalogue
page produit : fiche article complète, pour un seul meuble

### Fiche article :
id, nom, catégorie, prix, photo, description, couleur, dimensions, matière, état, statut acheté/réservé/disponible

### Fiche utilisateur :
id, nom, prénom, email, mot de passe (+ sécurisation)

# Organisation

### Répartition des équipes (semaine 1) :
- Back : Nadège, Apolline, Nicolas
- Front : Marie, Axel, Angie, Sam
- TechLead : Sam

### Rituels et fonctionnement :
- Daily en début de journée par sous-équipe (5 minutes pour objectifs de la journée)
- Point de fin de journée commun plus poussé pour partage des avancements respectifs
- Git : création branches et autres au fur et à mesure, pas de push en direct sur le main 😉
- Utilisation de JIRA pour le suivi des tâches


****************************

# Setup de la partie BackEnd :

### Outils divers :
- extension Better Comment sur VS Code
- Postman

### Documentation
- Sequelize : https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
- Tuto backend (intéressant au début jusqu'à 30 min) : https://www.youtube.com/watch?v=Iv4VIBEBHKk

### Installation Node Express (paquet inclu dans le package.json) :
- npm install express
- Données de connexions présentes dans le fichier server.js

### Installation MySQL (NON inclu dans le package.json) :
- Télécharger puis installer MySQL : https://dev.mysql.com/downloads/installer/
- Paramétrage pour résoudre un bug de connexion dans le MySQL Workbench :

--> appliquer le correctif (pour les Windows) à 2'09 de la vidéo https://www.youtube.com/watch?v=yq1CpK0Tjo8
--> Sur Apple : vérifier que le système est à jour, et attention au choix de la version de téléchargement (x86 ou ARM)

### Installation dotenv + sequelize (paquets inclus dans le package.json) :
- Sequelize (permet la connexion vers base SQL depuis Nodejs:

--> commande d'install : npm install sequelize

--> favoriser le combo mysql2/sequelize vs mysql (pb de sécurité non patché sur mysql)

- dotenv : permet de gérer les fichiers de variables d'environnement (stockage des mots de passe par exemple)

--> une fois le paquet installé, node va savoir gérer la récupération des variables d'environnement (via l'instruction process.env.VAR_NAME)

### Créer un fichier '.env' avec les informations suivantes :

--> DB_NAME= **nom de la db**
--> DB_USER=root
--> DB_PASSWORD=**mdp de la db**
--> DB_HOST=localhost
--> DB_PORT=3306



### Pour MacOS :
Lancer mySQL comme ceci :

    mysql.server start

pour se connecter en ligne de commande : mysql -u root



























### Code pour créer la base de donnée (en cas d'urgence):

# Cette partie est automatique;ent build par le fichier createDB.js :

INSERT INTO furniture (name, category, price, picture, description, color, dimensions, material, item_condition, item_status, createdAt, updatedAt)
VALUES
('Bureau en verre', 'Bureau', 400, 'bureau1.jpg', 'Bureau en verre élégant et moderne', 'Transparent', 120, 'Glass', 'New', true, NOW(), NOW()),
('Table basse en verre', 'Table', 300, 'tablebasse1.jpg', 'Table basse en verre moderne et design', 'Transparent', 80, 'Glass', 'New', true, NOW(), NOW()),
('Étagère en bois', 'Étagère', 250, 'etagere1.jpg', 'Étagère en bois rustique et fonctionnelle', 'Brown', 100, 'Wood', 'New', true, NOW(), NOW()),
('Canapé en cuir', 'Canapé', 800, 'canape1.jpg', 'Canapé en cuir confortable et élégant', 'Black', 200, 'Leather', 'New', true, NOW(), NOW()),
('Fauteuil en tissu', 'Fauteuil', 500, 'fauteuil1.jpg', 'Fauteuil en tissu confortable et stylé', 'Gray', 100, 'Fabric', 'New', true, NOW(), NOW()),
('Chaise de bureau', 'Chaise', 200, 'chaisebureau1.jpg', 'Chaise de bureau ergonomique et design', 'Black', 80, 'Plastic', 'New', true, NOW(), NOW()),
('Bureau en bois', 'Bureau', 600, 'bureau2.jpg', 'Bureau en bois robuste et fonctionnel', 'Brown', 140, 'Wood', 'New', true, NOW(), NOW()),
('Armoire en métal', 'Armoire', 900, 'armoire1.jpg', 'Armoire en métal solide et spacieuse', 'Silver', 200, 'Metal', 'New', true, NOW(), NOW()),
('Commode en bois', 'Commode', 450, 'commode1.jpg', 'Commode en bois pratique et esthétique', 'White', 120, 'Wood', 'New', true, NOW(), NOW()),
('Lit en métal', 'Lit', 700, 'lit1.jpg', 'Lit en métal robuste et confortable', 'Black', 220, 'Metal', 'New', true, NOW(), NOW()),
('Table en bois d''occasion', 'Table', 150, 'tableoccasion1.jpg', 'Table en bois d''occasion dans un état correct', 'Brown', 100, 'Wood', 'Occasion', true, NOW(), NOW()),
('Chaise de jardin d''occasion', 'Chaise', 80, 'chaisejardinoccasion1.jpg', 'Chaise de jardin d''occasion en bon état', 'Green', 70, 'Plastic', 'Occasion', true, NOW(), NOW());


# partie a rajouter a la mano pour le moment :

USE plateforme_de_meubles;

CREATE TABLE photos (
id_item INT NOT NULL,
photo_rank INT NOT NULL,
src VARCHAR(255) NOT NULL,
alt VARCHAR(255) NOT NULL
);


INSERT INTO photos (id_item, photo_rank, src, alt)
VALUES
(1, 1, 'https://images.selency.com/24b02aaf-3b9c-4ad7-88b4-1bb2943ab33c', 'Description de l''image 1'),
(1, 2, 'https://images.selency.com/5c19044b-59b9-474f-b8b0-47b9e7d3e48d', 'Description de l''image 2'),
(1, 3, 'https://images.selency.com/978bc04c-0a27-4018-97d1-f2a083401fab', 'Description de l''image 3'),

(2, 1, 'https://images.selency.com/4fca6d94-e81b-4c50-a3f9-43a0b7493783', 'Description de l''image 1'),
(2, 2, 'https://images.selency.com/4900bea4-bfa4-4131-b184-7b6177291873', 'Description de l''image 2'),
(2, 3, 'https://images.selency.com/c9a2e528-6b0a-451f-801c-9d9b3ab322e9', 'Description de l''image 3'),

(3, 1, 'https://images.selency.com/ada20333-8956-4b6d-86fc-7c877d99ad60', 'Description de l''image 1'),
(3, 2, 'https://images.selency.com/76bb9b56-6948-43e3-8511-f14919084371', 'Description de l''image 2'),
(3, 3, 'https://images.selency.com/1f1ec512-41f1-4d52-a1c2-61dc0831f1e7', 'Description de l''image 3'),

(4, 1, 'https://images.selency.com/5d5faded-9ed7-49bf-bd07-17a98b4d7f0c', 'Description de l'image 1'),
(4, 2, 'https://images.selency.com/ce21bd6c-d79b-434d-b72f-52b990404ceb', 'Description de l'image 2'),
(4, 3, 'https://images.selency.com/3e2542f7-6d4c-4358-b74a-26793190518c', 'Description de l'image 3'),

(5, 1, 'https://images.selency.com/4d48ef0d-e97a-4710-9200-bf4f1aca09c7', 'Description de l'image 1'),
(5, 2, 'https://images.selency.com/49d48f76-de07-428e-b2ca-642120613efc', 'Description de l'image 2'),
(5, 3, 'https://images.selency.com/ddf183c0-175f-426f-a8a0-473629d96a59', 'Description de l'image 3'),

(6, 1, 'https://images.selency.com/8317c428-71ea-8409-a0bf-6098919deba0', 'Description de l'image 1'),
(6, 2, 'https://images.selency.com/69f85e9d-5ffe-41cb-bc8f-281d69a6b708', 'Description de l'image 2'),
(6, 3, 'https://images.selency.com/35212b24-8462-465c-94fc-618f60d85b68', 'Description de l'image 3'),

(7, 1, 'https://images.selency.com/22901fe1-e932-fde5-92ff-2ac64885c9de', 'Description de l'image 1'),
(7, 2, 'https://images.selency.com/bb71c45b-8683-4d7b-9452-53952f63bb12', 'Description de l'image 2'),
(7, 3, 'https://images.selency.com/ae00e2b8-ece2-4b60-b57a-983d65a1c396', 'Description de l'image 3'),

(8, 1, 'https://images.selency.com/e0c7d90f-4211-4c1f-9912-e2feef4a5d78', 'Description de l'image 1'),
(8, 2, 'https://images.selency.com/6c3c820f-9091-4ba1-aed7-ddd1eee3ebb3', 'Description de l'image 2'),
(8, 3, 'https://images.selency.com/4bf0fbe2-41aa-4d57-8650-8e366630ffab', 'Description de l'image 3'),

(9, 1, 'https://images.selency.com/f367a126-0834-42ac-9f67-b93611a1c490', 'Description de l'image 1'),
(9, 2, 'https://images.selency.com/991231c7-e641-49b0-86f8-149731548d01', 'Description de l'image 2'),
(9, 3, 'https://images.selency.com/2dc9e2fb-633b-487d-a97b-029fbb413e9f', 'Description de l'image 3'),

(10, 1, 'https://images.selency.com/2fe63f03-d6bf-42f0-afe0-23c5b5c9f252', 'Description de l'image 1'),
(10, 2, 'https://images.selency.com/01b63ba8-7680-4e2f-a6c4-c52517e9c5ae', 'Description de l'image 2'),
(10, 3, 'https://images.selency.com/c098aab8-6d5a-4c26-83f1-da8f09ddf703', 'Description de l'image 3');
