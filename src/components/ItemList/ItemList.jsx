//COMPONENTE DE PRESENTACION QUE SE ENCARGA DE LISTAR LO PRODUCTOS Y LOS VOY A MOSTRAR CON EL COMPONENTE ITEM
import "./ItemList.css"
import Item from "../Item/Item"
//import {collection} from "firebase/firestore"
//import BBDD from "../config/firebase"
//import {useEffect, useState} from "react";

//getDocs
//collection
/*
const ItemList = () => {
const [items, setItems] = useState([])
useEffect (() =>{
    const collectionRef = collection(BBDD.db, "products");
getDocs(collectionRef).then((snaps) => {
    const { docs } = snaps; 
    const list = docs.map((doc) => ({ ...doc.data(), id: doc.id}));            la funcion data es para que me devuelva objetos por cada doc y el map me deuvelve un array de elementos, en este caso una array de cada documento ejecutando data
    console.log(list);
    setItems(list);
});
    },[])

return ---> lo que hay debajo 
    
    }

*/

const ItemList = ({products}) => {
    return (
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)} 
        </div>
    )
}

export default ItemList;