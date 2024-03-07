import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Carrousel from './components/product-page/carrousel';
import Product from './components/product-page/product.jsx';

function App() {
  return (
    <>
    <Header/>
    <div className="container-g">
      <Product />
    </div>
    <Footer/>
    </>
  )
}

export default App
