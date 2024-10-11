import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
//estado que se encargue de almacenar los productos
    const [products, setProducts] = useState([])

    //para obtener los productos llamamos la funcion getProducts
    useEffect(()=>{
        getProducts()
            .then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products ={products}/>
        </div>
        );
    };

export default ItemListContainer