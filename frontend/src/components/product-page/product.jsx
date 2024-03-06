import ProductDetails from "./productDetails.jsx";
import BuyBtn from "./buyButton.jsx";
import data from '../../../../bouchon-data.json'

function Product() {
    let productData = data.products[2];

    return (
        <>
            <div id="product">
                <div id="placeholderCarousel"></div>
                <div id="productMainSection">
                    <ProductDetails productData={productData} />
                    <BuyBtn />
                </div>
            </div>
        </>
    );
}

export default Product;
