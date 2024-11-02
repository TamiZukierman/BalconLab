import "./item.css"
import { Link } from "react-router-dom"
//import BBDD from "../../config/firebase";
//import {doc, getDoc} from "firebase/firestore"

//metodos: doc y getDoc me va a devolver el snapshot de un solo documento


/* 
cons item =() => {
const [item, setItem] = useState(null)
useEffect(()=>{
    const docREf = doc(BBDD.db,"products", "0vWQHSrBZOPZXteRyuoy") //el ide lo estoy escribiendo manual deberia venir de auna props o algo
    getDoc(docRef).then((snap) => {
        console.log(snap.data(), snap.id);
        setItem(snap.data())
    )}
    },[]);

    return (
    <>
    {item && (                   cuando item exista renderizame esto
    ACA PONER TODO EL BLOQUE DE ABAJO DESDE <ARTICLE></ARTICLE>
    })
    </>
);
};

*/
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