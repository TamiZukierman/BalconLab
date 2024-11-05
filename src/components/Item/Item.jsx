import "./item.css"
import { Link } from "react-router-dom"
//import BBDD from "../../config/firebase";
//import {doc, getDoc} from "firebase/firestore"

//metodos: doc y getDoc me va a devolver el snapshot de un solo documento



const Item =({id, name, img, price, stock, description}) =>{

    return (
        <article className="CardItem"> 
            <h4>{name}</h4>
            <picture>
                <img src={img} alt= {name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Precio">Precio: ${price}</p>
                
            </section>
            <footer className="ItemFooter">
            <Link className="Option" to = {`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item