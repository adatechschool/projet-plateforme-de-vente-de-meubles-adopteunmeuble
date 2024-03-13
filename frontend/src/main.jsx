import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/pages/index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import Product,{ dataProductLoader } from './product-page/product.jsx'
import Header from './layouts/header.jsx'
import Footer from './layouts/footer.jsx'
import Home from './pages/Home.jsx';
import StickersGrid, { getData } from './catalog-page/stickersGrid.jsx'
import "../src/styles/pages/App.css"
import ProductForm from './pages/ProductForm.jsx'

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Home />
          </>
        ),
      },
      {
        path: '/products',
        loader: getData,
        element: <StickersGrid />
      },
      {
        path: '/products/:productId',
        loader: dataProductLoader,
        element: <Product />,
      },
      {
        path: '/newFurniture',
        element: <ProductForm />,
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
