// Tâche : Ajouter une page formulaire de publication d'annonce (le lien est déjà fait pour ajout direct à la base de données
//  respecter meubles models !! (post product)

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
    // La fonction "onSubmit" sera appelée lors de l’envoi du formulaire
    // et recevra un objet contenant les valeurs de chaque champ du formulaire.
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class="title">
        <label htmlFor="title">Enter a title :</label>
        <input
          name="title"
          type="text"
          value={inputValue.title}
          onChange={handleChange}
          {...register("title", { required: true })} // Champ à valider
        />
        {/* On peut utiliser l'objet "errors" pour afficher les éventuelles erreurs de validation.*/}
        {errors.title && <p>Title is required and must be valid</p>}
      </div>
      <br />
      <div class="category">
        *
        <label htmlFor="category">
          <p>Select a category :</p>
          <select
            name="category"
            value={inputValue.category}
            onChange={handleChange}
            {...register("category", { required: true })}
          >
            <option value="">Select a category</option>
            <option value="accessories">Accessories</option>
            <option value="cabinet">Cabinet</option>
            <option value="bar">Bar</option>
            <option value="bath">Bath & tub</option>
            <option value="bookcase-shelf">Bookcase & shelf</option>
            <option value="sideboard">Sideboard</option>
            <option value="desk">Bureau</option>
            <option value="sofa">Sofa</option>
            <option value="dressing-table">Dressing-table</option>
            <option value="armchair">Armchair</option>
            <option value="bed">Bed</option>
            <option value="lighting">Lighting</option>
            <option value="kitchen-furniture">Kitchen furniture</option>
            <option value="garden-furniture">Kitchen furniture</option>
            <option value="storage-furniture">Storage furniture</option>
            <option value="bathroom-furniture">bathroom rurniture</option>
            <option value="tv-cabinet">TV cabinet</option>
            <option value="dining-table">Dining table</option>
            <option value="bedside-table">Bedside table</option>
            <option value="carpet">Carpet</option>
            <option value="other">Autre</option>
          </select>
          {errors.category && <p>Category is required and must be valid</p>}
        </label>
      </div>
      <br />
      <div class="picture">
        <label htmlFor="picture">
          <p>Add a picture :</p>
          <input name="picture" type="file" onChange={handleChange} />
        </label>
      </div>
      <br />
      <div class="description">
        <label htmlFor="description">
          <p>Description :</p>
          <textarea
            // type="texte" (pas utile car déjà dans un textarea)
            name="description"
            value={inputValue.description}
            onChange={handleChange}
            {...register("description", { required: true })}
          />
          {errors.description && <p>Category is required and must be valid</p>}
        </label>
      </div>
      <br />
      <div class="color">
        <label htmlFor="color">
          <p>Color :</p>
          <select name="color" value={inputValue.color} onChange={handleChange}>
            <option value="">Select a color</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="brown">Brown</option>
            <option value="gray">Gray</option>
            <option value="green">Green</option>
            <option value="pink">Pink</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="white">White</option>
          </select>
        </label>
      </div>
      <br />
      <div class="dimensions">
        <label htmlFor="dimensions">
          <p>Dimensions :</p>
          <input
            name="dimensions"
            type="text"
            value={inputValue.dimensions}
            onChange={handleChange}
          />
        </label>
      </div>
      <br />
      <div class="material">
        <label htmlFor="material">
          <p>Material :</p>
          <select
            name="material"
            value={inputValue.material}
            onChange={handleChange}
          >
            <option value="">Select a material</option>
            <option value="steel">Steel</option>
            <option value="wood">Wood</option>
            <option value="bronze">Bronze</option>
            <option value="ceramic">Ceramic</option>
            <option value="oak">Oak</option>
            <option value="leather">Leather</option>
            <option value="iron">Iron</option>
            <option value="formica">Formica</option>
            <option value="lacquer">Lacquer</option>
            <option value="marble">Marble</option>
            <option value="metal">Metal</option>
            <option value="stone">Stone</option>
            <option value="pine">Pine</option>
            <option value="plastic">Plastic</option>
            <option value="rattan-wicker">Rattan & wicker</option>
            <option value="fabric">Fabric</option>
            <option value="velvet">Velvet</option>
            <option value="glass">Glass</option>
          </select>
        </label>
      </div>
      <br />
      <div class="condition">
        <label htmlFor="condition">
          <p>Condition :</p>
          <select
            name="condition"
            value={inputValue.condition}
            onChange={handleChange}
          >
            <option value="">Select a condition</option>
            <option value="like-new">Like new</option>
            <option value="very-good-condition">Very good condition</option>
            <option value="good-condition">good condition</option>
            <option value="fair-condition">Fair condition</option>
          </select>
        </label>
      </div>
      <br />
      <div class="price">
        <label htmlFor="price">
          <p>Price :</p>
          <input
            name="price"
            type="number"
            placeholder="0000"
            value={inputValue.price}
            onChange={handleChange}
            {...register("price", { required: true })}
          />
          {errors.price && <p>Price is required and must be valid</p>}
        </label>
      </div>
      <br />
      <div class="status">
        <label htmlFor="status">
          <p>Check to confirm the availibility of your product !</p>
          <input
            name="status"
            type="checkbox"
            checked={inputValue.status}
            onChange={(event) =>
              setInputValue({ ...inputValue, status: event.target.checked })
            }
          />
        </label>
      </div>

      <button type="submit" class="submit-btn">
        Submit
      </button>
      <div>
        <p>Resume of your product</p>
        <p>Title: {inputValue.title}</p>
        <p>Category: {inputValue.category}</p>
        <p>Description: {inputValue.description}</p>
        <p>Price: {inputValue.price}</p>
      </div>
    </form>
  );
}

export default ProductForm;
