// Ici on créé le composant stickers qui est une vignette reprenant certains élément de la fiche produit,
// soit le nom, la catégorie, le prix, l'image et un bouton d'ajout au panier.
// Ces éléments sont actuellement dans le fichier bouchou-date.json
import "./sticker.css"

function Sticker({product}) {
    return (
     <div className="sticker">
      <p className="product-name">{product.name}</p>
      <p className="product-category">Catégorie : {product.category}</p>
      <p className="product-price">{product.price} € TTC</p>
      <img src={product.picture} />
      <button className="add-to-cart">Ajouter au panier</button>
      </div>
    )
}

export default Sticker