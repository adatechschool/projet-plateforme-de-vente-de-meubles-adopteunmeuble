import "../styles/components/form.css";

import React from "react";

// Commencer par installer : npm install react-hook-form
// Une fois la bibliothèque installée, vous devez importer le hook useForm du package react-hook-form dans votre composant.

import { useForm } from "react-hook-form";

// The useState hook permet de gérer l'état du formulaire avec un statut de variable (inputValue)
// et une fonction pour mettre à jour l'état (setInputValue).

import { useState } from "react";

import { Link } from "react-router-dom";

function ProductForm() {
  // État initial du formulaire
  // Création d'un objet qui contient les valeurs des champs du formulaire

  const [inputValue, setInputValue] = useState({
    title: "",
    category: "",
    picture: null, // Pour stocker l'image en tant qu'objet File
    description: "",
    color: "",
    dimensions: "",
    material: "",
    condition: "",
    status: true, // Statut de disponibilité initialisé à true (considère que le produit est disponible)
    price: "",
  });

  // Gestion du changement des champs du formulaire
  const handleChange = (event) => {
    // setInputValue(event.target.value);
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };

  // Même si les informations du produits ne seront pas changées après le dépôt de l'annonce du produit,
  // il est utile de garder la fonction "useState" lors du remplissage du formulaire au cas où si les données rentrées ne sont pas correctes.
  // Cela permet d'identifier et afficher les erreurs.

  // L'attribut "onChange" est utilisé pour définir une fonction à appeler chaque fois que la valeur de l'élément d'entrée change.
  // Dans ce cas, la fonction est une fonction fléchée qui prend un objet "event" comme paramètre et appelle la fonction "setName" avec la valeur actuelle de l'élément d'entrée "(event.target.value)"".

  // En d'autres termes, cette ligne de code permet de mettre à jour la valeur de la variable d'état "title" (par exemple) chaque fois que l'utilisateur saisit du texte dans l'élément d'entrée.
  // Cela permet de garder l'état du formulaire synchronisé avec les entrées de l'utilisateur.

  // Utilisation de react-hook-form pour la gestion du formulaire
  // register : Cette fonction est utilisée pour enregistrer les champs du formulaire avec React Hook Form.
  // handleSubmit : Cette fonction est utilisée pour gérer les soumissions de formulaires. Elle prend une fonction de rappel qui est appelée lorsque le formulaire est soumis.
  // erreurs : Il s'agit d'un objet contenant toutes les erreurs de validation qui se produisent lorsqu'un formulaire est soumis.
  // Dans le code ci-dessus, nous utilisons la déstructuration pour extraire les propriétés register, handleSubmit et errors du crochet useForm.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Fonction de soumission du formulaire
  const onSubmit = (data) => {
    console.log(data);
  };

  // A noter (chatgpt) : Ici, vous pouvez envoyer les données du formulaire vers votre backend pour enregistrement
  // Assurez-vous d'inclure la gestion du téléchargement de l'image côté serveur
  return (
    // Penser à créer l'option d'enregistrement du formulaire

    // Nous passons la fonction "onSubmit" à la fonction "handleSubmit".
    // La fonction "onSubmit" sera appelée lors de l'envoi du formulaire
    // et recevra un objet contenant les valeurs de chaque champ du formulaire.
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="post-an-ad">Déposer une annonce</h2>
      <label htmlFor="title">Titre :</label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        {...register("title", { required: true })} // Champ à valider
      />
      {errors.title && <p>Le titre est obligatoire et doit être valide</p>}
      <br />
      <label htmlFor="category">
        Catégorie :
        <select
          name="category"
          onChange={handleChange}
          {...register("category", { required: true })}
        >
          <option value="">Sélectionner une catégorie</option>
          <option value="accessories">Accessoires</option>
          <option value="cabinet">Cabinet</option>
          <option value="bar">Bar</option>
          <option value="bath">Bain et baignoire</option>
          <option value="bookcase-shelf">Bibliothèque et étagère</option>
          <option value="sideboard">Sideboard</option>
          <option value="desk">Bureau</option>
          <option value="sofa">Sofa</option>
          <option value="coiffeuse">Coiffeuse</option>
          <option value="fauteuil">Fauteuil</option>
          <option value="lit">Lit</option>
          <option value="lighting">Lighting</option>
          <option value="meuble-cuisine">Meuble-cuisine</option>
          <option value="garden-furniture">Meubles de cuisine</option>
          <option value="meubles de rangement">Meubles de rangement</option>
          <option value="meuble-salle de bain">meuble-salle de bain</option>
          <option value="tv-cabinet">Cabinet TV</option>
          <option value="dining-table">Table à manger</option>
          <option value="bedside-table">Table de chevet</option>
          <option value="carpet">Moquette</option>

          <option value="other">Autre</option>
        </select>
        {errors.category && (
          <p>La catégorie est obligatoire et doit être valide</p>
        )}
      </label>
      <br />
      <label htmlFor="picture">
        Ajouter une image :
        <br />
        <input name="picture" type="file" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="description">
        Description :
        <textarea
          name="description"
          onChange={handleChange}
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p>La description est obligatoire et doit être valide</p>
        )}
      </label>
      <br />
      <label htmlFor="color">
        Couleur :
        <select name="color" onChange={handleChange}>
          <option value="">Sélectionner une couleur</option>
          <option value="black">Noir</option>
          <option value="blue">Bleu</option>
          <option value="brown">Brun</option>
          <option value="gray">Gris</option>
          <option value="green">Vert</option>
          <option value="pink">Rose</option>
          <option value="red">Rouge</option>
          <option value="yellow">Jaune</option>
          <option value="white">Blanc</option>
        </select>
      </label>
      <br />
      <label htmlFor="dimensions">
        Dimensions :
        <input name="dimensions" type="text" onChange={handleChange} />
      </label>
      <br />
      <label htmlFor="material">
        Matière :
        <select name="material" onChange={handleChange}>
          <option value="">Sélectionner une matière</option>
          <option value="steel">Acier</option>
          <option value="bois">Bois</option>
          <option value="bronze">Bronze</option>
          <option value="ceramic">Céramique</option>
          <option value="oak">Chêne</option>
          <option value="leather">Cuir</option>
          <option value="iron">Iron</option>
          <option value="formica">Formica</option>
          <option value="laque">Laque</option>
          <option value="marbre">Marbre</option>
          <option value="metal">Métal</option>
          <option value="stone">Pierre</option>
          <option value="pin">Pin</option>
          <option value="plastic">Plastic</option>
          <option value="rattan-wicker">Rotin et osier</option>
          <option value="tissu">Tissu</option>
          <option value="velours">Velours</option>
          <option value="glass">Verre</option>
        </select>
      </label>
      <br />
      <label htmlFor="condition">
        Etat :
        <select name="condition" onChange={handleChange}>
          <option value="">Sélectionner une condition</option>
          <option value="like-new">Comme neuf</option>
          <option value="very-good-condition">Très bon état</option>
          <option value="good-condition">Bon état</option>
          <option value="fair-condition">Etat moyen</option>
        </select>
      </label>
      <br />
      <label htmlFor="price">
        Prix :
        <input
          name="price"
          type="number"
          placeholder="0000"
          onChange={handleChange}
          {...register("price", { required: true })}
        />
        {errors.price && (
          <p>La catégorie est obligatoire et doit être valide</p>
        )}
      </label>
      <br />
      <label htmlFor="status">
        <p>Cocher pour confirmer la disponibilité du produit !</p>
        <input
          name="status"
          type="checkbox"
          onChange={(event) =>
            setInputValue({ ...inputValue, status: event.target.checked })
          }
        />
      </label>

      <button type="submit" class="submit-btn">
        Publier
      </button>
      <br />
      {/* // Imaginer un aperçu de l'annonce en dernier */}
    </form>
  );
}

export default ProductForm;
