function ProductDetails({ productData }) {
    const renderDetail = (label, value) => (
        <div className="detail">
            <div className="detail-label">{label}</div>
            <div className="detail-value">{value}</div>
        </div>
    );

    const details = [
        { label: "Prix", value: productData.price },
        { label: "Categorie", value: productData.category },
        { label: "Description", value: productData.description },
        { label: "Dimensions", value: productData.dimensions },
        { label: "Couleur", value: productData.color },
        { label: "Matières", value: productData.material },
        { label: "Condition", value: productData.condition },
        { label: "Statut", value: productData.status ? "Disponible" : "Vendu" },
    ];

    return (
        <div id="productDetails">
            <div id="productName">{productData.name}</div>
            {details.map((detail) =>
                renderDetail(detail.label, detail.value)
            )}
        </div>
    );
}

export default ProductDetails;
