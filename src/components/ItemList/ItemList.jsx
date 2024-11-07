//COMPONENTE DE PRESENTACION QUE SE ENCARGA DE LISTAR LO PRODUCTOS Y LOS VOY A MOSTRAR CON EL COMPONENTE ITEM
import "./ItemList.css"
import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <div className="ListGroup">
            {products.map(prod => <Item key={prod.id} {...prod}/>)} 
        </div>
    )
}

export default ItemList;