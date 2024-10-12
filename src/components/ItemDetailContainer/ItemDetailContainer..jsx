import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setproduct] = useState(null)

    useEffect (() => {
        getProductById("1") //aca harcodie el id 1 
            .then(response => {
                setproduct(response)
            })
            .catch(error=>{
                console.error(error)
            })
    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer