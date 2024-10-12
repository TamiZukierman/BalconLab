import { useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
//estado que se encargue de almacenar los productos
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    //para obtener los productos llamamos la funcion getProducts
    useEffect(()=>{
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        asyncFunc(categoryId)
            .then(response=>{
                setProducts(response)
            })
            .catch(error=>{
                console.error(error)
            })
    },[categoryId])

    return (
        <div>
            <h2>{greeting}</h2>
            <ItemList products ={products}/>
        </div>
        );
    };

export default ItemListContainer