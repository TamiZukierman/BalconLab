import './App.css'
import './components/header.css'
import { Header } from './components/header';
import { Container } from './components/container';


function App() {
//cuando invoco al componente le paso la propiedad que yo quiera ej titulo, texto: nombre de la prop  =  {} (si le paso un string no hace falt alas llaves solo "")


  return (
<div>
  <Header />
  <Container welcomeMessage="¡Bienvenido a nuestra tienda!"/>
</div>

  )
}

export default App
