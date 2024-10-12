import './App.css'
import "./components/Header/header.css"
import { Header } from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.';
import { Routes, Route } from 'react-router-dom';




function App() {
//cuando invoco al componente le paso la propiedad que yo quiera ej titulo, texto: nombre de la prop  =  {} (si le paso un string no hace falt alas llaves solo "")

  return (
<div className='App'>
    <Header />
    <main className="main-content">
    <Routes>
      <Route path = "/" element ={<ItemListContainer/>}/>
      <Route path = "/category/:categoryId" element ={<ItemListContainer/>}/>
      <Route path = "/item/:itemId" element ={<ItemDetailContainer/>}/>
      <Route path = "*" element ={<h1>404 NOR FOUND</h1>}/>
    </Routes>
    </main>
</div>


  )
}

export default App
