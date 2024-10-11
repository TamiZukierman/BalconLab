import './App.css'
import "./components/Header/header.css"
import { Header } from './components/Header/header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {
//cuando invoco al componente le paso la propiedad que yo quiera ej titulo, texto: nombre de la prop  =  {} (si le paso un string no hace falt alas llaves solo "")


  return (
<div>
  <Header />
  <main className="main-content">
  <ItemListContainer greeting={"Bienvenidos"}/>
  <ItemCount initial = {1} stock =  {10} onAdd = {(quantity) => console.log("Cantidad agregada",quantity)}/>
  </main>
</div>

  )
}

export default App
