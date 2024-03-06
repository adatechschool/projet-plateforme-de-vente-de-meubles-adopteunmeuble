import './App.css'
import Header from './components/header.jsx'
import Carrousel from './components/product-page/carrousel';

function App() {
  return (
    <>
      <Header/>
      <div className="container-global">
      <Carrousel/>
      </div>

    </>
  )
}

export default App
