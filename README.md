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
