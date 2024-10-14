import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null)

    const {itemId} = useParams()

    useEffect (() => {
        
        getProductById(itemId) //aca harcodie el id 1 
            .then(response => {
                setproduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [itemId])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer