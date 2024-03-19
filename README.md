
# Adopte Un Meuble

La plateforme de vente de meubles qui va vous aider à trouver le match parfait !

### Voir la vidéo démo ==> https://vimeo.com/924123048?share=copy


## Authors

- Apolline Diaz
- Angie Gillardet
- Axel Chicheportiche
- Marie KABLAN
- Nadège PELCAT
- Nassim Mahla
- Nicolas PERROTIN
- Sam Lavazais


## Tech Stack

**Client:** React, vanilla CSS

**Server:** Node, Express, MySQL, Sequelize


****************************
# Premières étapes et MVP :

## Plateforme de meubles avec :
Une page de sommaire / choix parmi les meubles
Accès aux fiches clients
Page "admin" pour gestion du stock et des produits
comptes utilisateurs / authentification

## Définition du MVP :
MVP = 2 pages / 1 BDD de meubles avec données mini avec deux requêtes : une requête "ensemble du catalogue" / une requête fiche article
Page qui afficher une liste de meuble (sans forcément de meuble)
Une page de détail pour le meuble
avec bouton vente, mais sans forcément la page derrière

## Etapes optionnelles :
1 page administrateur avec la gestion du stock
1 page de login
1 page ajout de meuble
Fonctionnalité de filtre sur la page d'affichage du catalogue de meubles

# Aspects techniques

## Définition de la stack :
Front : REACT
Back : Node + Express
BDD :  mySQL

## Requêtes :
page principale : nom, prix, photo, catégorie, pour l'ensemble des meubles au catalogue
page produit : fiche article complète, pour un seul meuble

## Fiche article :
id, nom, catégorie, prix, photo, description, couleur, dimensions, matière, état, statut acheté/réservé/disponible

## Fiche utilisateur :
id, nom, prénom, email, mot de passe (+ sécurisation)

# Organisation

## Répartition des équipes (semaine 1) :
- Back : Nadège, Apolline, Nassim, Nicolas
- Front : Marie, Axel, Angie, Sam
- TechLead : Sam

## Rituels et fonctionnement :
- Daily en début de journée par sous-équipe (5 minutes pour objectifs de la journée)
- Point de fin de journée commun plus poussé pour partage des avancements respectifs
- Git : création branches et autres au fur et à mesure, pas de push en direct sur le main 😉
- Utilisation de JIRA pour le suivi des tâches


****************************

# Setup de la partie BackEnd :

## Outils divers :
- extension Better Comment sur VS Code
- Postman

## Documentation
- Sequelize : https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
- Tuto backend (intéressant au début jusqu'à 30 min) : https://www.youtube.com/watch?v=Iv4VIBEBHKk

## Installation Node Express (paquet inclu dans le package.json) :
- npm install express
- Données de connexions présentes dans le fichier server.js

## Installation MySQL (NON inclu dans le package.json) :
- Télécharger puis installer MySQL : https://dev.mysql.com/downloads/installer/
- Paramétrage pour résoudre un bug de connexion dans le MySQL Workbench :

--> appliquer le correctif (pour les Windows) à 2'09 de la vidéo https://www.youtube.com/watch?v=yq1CpK0Tjo8
--> Sur Apple : vérifier que le système est à jour, et attention au choix de la version de téléchargement (x86 ou ARM)

## Installation dotenv + sequelize (paquets inclus dans le package.json) :
- Sequelize (permet la connexion vers base SQL depuis Nodejs:

--> commande d'install : npm install sequelize

--> favoriser le combo mysql2/sequelize vs mysql (pb de sécurité non patché sur mysql)

- dotenv : permet de gérer les fichiers de variables d'environnement (stockage des mots de passe par exemple)

--> une fois le paquet installé, node va savoir gérer la récupération des variables d'environnement (via l'instruction process.env.VAR_NAME)

## Environment Variables

Pour lancer ce projet, il va vous falloir ajouter les variables suivantes à votre fichier .env :

- DB_NAME= **nom de la db**
- DB_USER=root
- DB_PASSWORD=**mdp de la db**
- DB_HOST=localhost
- DB_PORT=3306
--> DB_HOST=localhost
--> DB_PORT=3306


****************************

## Configuration Docker

Le projet est dockerisé et est disponible sur la branche "docker_setup".

Voici les étapes à suivre pour configurer Docker :

    #1 Installer Docker :
        - Avant de commencer, assurez-vous d'avoir Docker installé sur votre système. Si ce n'est pas déjà fait, vous pouvez suivre les instructions fournies dans la documentation officielle de Docker sur ce lien : https://docs.docker.com/get-docker/

    #2 Accéder à la branche "docker_setup" : Utilisez la commande suivante pour basculer sur la branche docker_setup :

    -->git checkout docker_setup

        (Remarque : Exceptionnellement, les fichiers .env nécessaires sont inclus dans cette branche pour faciliter la configuration.)

    #3 Lancer l'environnement Docker : Une fois sur la branche docker_setup, exécutez la commande suivante pour démarrer l'environnement Docker :

    -->docker-compose up

    - Cette commande va construire les conteneurs Docker et les démarrer selon la configuration définie dans le fichier docker-compose.yml.

    #4 Initialisation de la base de données Docker :

    - Une fois que l'environnement Docker est opérationnel, il est essentiel d'initialiser la base de données en exécutant la commande suivante :

    -->docker exec backend node config/createDB.js

    Cette commande déclenche le processus d'initialisation de la base de données en utilisant les commandes Sequelize adaptées. Elle permet de mettre en place la structure de la base de données nécessaire pour le projet. Une fois cette étape terminée, la configuration de Docker sera complète et le projet sera prêt à être utilisé.
