import { useEffect, useState } from "react";
//import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { where } from "firebase/firestore/lite";

const ItemListContainer = ({ greeting }) => {
//estado que se encargue de almacenar los productos
    const [products, setProducts] = useState([])

    const {categoryId} = useParams();
    

    //para obtener los productos llamamos la funcion getProducts
    useEffect(()=>{

        const productsRef = collection(db, "products");

        const q = categoryId ? query(productsRef, where("category", "==", categoryId)) : productsRef;

        getDocs(q)
            .then((resp) => {
            

                setProducts(
                    resp.docs.map((doc)=>{
                        return{...doc.data(), id:doc.id}
                    })

                )
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