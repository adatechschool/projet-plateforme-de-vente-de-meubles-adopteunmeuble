import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/pages/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product,{ dataProductLoader } from './components/product-page/product.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Home from './pages/Home.jsx';
import StickersGrid, { getData } from './components/home-page/stickersGrid.jsx'
import "../src/styles/pages/App.css"


const router = createBrowserRouter([
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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
