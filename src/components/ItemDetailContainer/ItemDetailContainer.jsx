import "./ItemDetailContainer.css"
import Spinner from "../Spinner/Spinner"; 
import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import {doc, getDoc} from 'firebase/firestore'
import { db } from "../../config/firebase"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const itemId = useParams().itemId

    useEffect (() => {
        
        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then((resp) => {
                setproduct(
                    {...resp.data(), id: resp.id}
                );
            })
            .finally(() => {
                setLoading(false); 
            });


    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            {loading ? ( // Muestra el spinner si está cargando
                <Spinner /> // Usa el spinner aquí
            ) : (
                product && product.id ? (
                    <ItemDetail {...product} />
                ) : (
                    <p>No se encontró el producto.</p>
                )
            )}
        </div>
    );
}

export default ItemDetailContainer