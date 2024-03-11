import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import data from '../../assets/bouchon-data.json'
import Carrousel from "./carrousel.jsx";
import { useLoaderData } from "react-router-dom";

// Fonction qui va récupérer les données de la base pour ce composant, et utiliser uniquement pour ce composant.
export async function dataProductLoader({params}) {
    const productId = params.productId
    const product = data.products.find(product => product["id"] === parseInt(productId)) // ici on mettra le FETCH
    
    console.log(product)
    
    return product
}


function Product() {
    const productData = useLoaderData()

    return (
     <>
            <div id="product">
                <Carrousel />
                <div id="productMainSection">
                <ProductDetails productData={productData} />
                <BuyBtn />
                </div>
            </div>
            </>
       

    );
}

export default Product;
