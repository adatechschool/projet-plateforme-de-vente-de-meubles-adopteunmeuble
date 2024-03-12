import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Product,{ dataProductLoader } from './components/product-page/product.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import StickersGrid from './components/home-page/stickersGrid.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/products',
        element: <StickersGrid />
      },
      {
        path: '/products/:productId',
        loader: dataProductLoader,
        element: <Product />,

      }

    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
