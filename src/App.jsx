import './App.css'
import "./components/Header/header.css"
import { Header } from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.';



function App() {
//cuando invoco al componente le paso la propiedad que yo quiera ej titulo, texto: nombre de la prop  =  {} (si le paso un string no hace falt alas llaves solo "")


  return (
<div>
  <Header />
  <main className="main-content">
  <ItemListContainer greeting={"Bienvenidos!"}/>
  <ItemDetailContainer />
  
  </main>
</div>

  )
}

export default App
