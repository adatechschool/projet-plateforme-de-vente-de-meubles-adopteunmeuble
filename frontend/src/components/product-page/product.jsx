import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import Carrousel from "./carrousel.jsx";
import { useLoaderData } from "react-router-dom";

// FETCH : Fonction qui va récupérer les données de la base pour ce composant précis :
export async function dataProductLoader({ params }) {
    const productId = params.productId;

    const response = await fetch(`http://localhost:3000/products/${productId}`);
    const json = await response.json();
    console.log(json.picture);
    return json;
}

function Product() {
    const productData = useLoaderData();

    return (
        <>
            <div id="product">
                <Carrousel pictures={productData.picture} />
                <div id="productMainSection">
                    <ProductDetails productData={productData} />
                    <BuyBtn />
                </div>
            </div>
        </>
    );
}

export default Product;
