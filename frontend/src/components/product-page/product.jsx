import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";

import data from "../../../../bouchon-data.json"


function Product(productId) {

    function getProductData(productId){
        return data.products[productId]
    }

    return (
        <div id="product">
            <div id="placeholderCarousel"></div>
            <div id="productMainSection">
                <ProductDetails productData={getProductData(1)} />
                <BuyBtn />
            </div>
        </div>
    );
}

export default Product;
