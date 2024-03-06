import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Product, { loadProductData } from "./components/product-page/product.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <ErrorPage />,
        children: [
            // {
            //     path: "products",
            //     element: <h1>stickersGrid</h1>,
            // },
            {
                path: "products/:productId",
                loader: loadProductData,
                element: <Product productId={2} />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
