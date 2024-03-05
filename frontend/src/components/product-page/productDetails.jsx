function ProductDetails({productData}) {
    console.log(productData)
    return (
        <div id="productDetails">
            <div id="productName">MEUBLE VIEUX & MOCHE</div>
            <div className="detail">
                <div className="detail-label">Prix</div>
                <div className="detail-value">{productData.price} €</div>
            </div>
            <div className="detail">
                <div className="detail-label">Category</div>
                <div className="detail-value">{productData.category}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Description</div>
                <div className="detail-value">{productData.description}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Dimensions</div>
                <div className="detail-value">{productData.dimensions}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Couleur</div>
                <div className="detail-value">{productData.color}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Matières</div>
                <div className="detail-value">{productData.material}</div>
            </div>
            <div className="detail">
                <div className="detail-label">Condition</div>
                <div className="detail-value">{productData.condition}</div>
            </div>
        </div>
    );
}

export default ProductDetails;
