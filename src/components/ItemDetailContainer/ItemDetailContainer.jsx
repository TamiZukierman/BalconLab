import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
//import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import {doc, getDoc} from 'firebase/firestore'
import { db } from "../../config/firebase"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null)

    const itemId = useParams().itemId

    useEffect (() => {
        
        const docRef = doc(db, "products", itemId)
        getDoc(docRef)
            .then((resp) => {
                setproduct(
                    {...resp.data(), id: resp.id}
                );
            })

    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            {product && product.id ? (
                <ItemDetail {...product} />
            ) : (
                <p>Cargando producto...</p> // Mensaje mientras se carga
            )}
        </div>
    );
}

export default ItemDetailContainer