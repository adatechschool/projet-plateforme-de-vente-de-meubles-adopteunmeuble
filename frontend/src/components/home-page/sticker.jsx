// Ici on créé le composant stickers qui est une vignette reprenant certains élément de la fiche produit,
// soit le nom, la catégorie, le prix, l'image et un bouton d'ajout au panier.
// Ces éléments sont actuellement dans le fichier bouchou-date.json
import "../../styles/components/sticker.css"
import { Link } from 'react-router-dom';

function Sticker({product}) {
  console.log("sticker.jsx=", product);
    return (
     <div className="sticker">
      <p className="product-name">{product.name}</p>
      <p className="product-category">Catégorie : {product.category}</p>
      <p className="product-price">{product.price} € TTC</p>
      <img id="img-sticker" src={product.picture} />
      <button className="add-to-cart">Ajouter au panier</button>
      <Link to={`/products/${product.id}`}>
      <button className="see-product">Voir les détails</button>
      </Link>
      </div>
    )
}

export default Sticker