import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react";
import { Link } from "react-router-dom";

//Componente de presentacion encargado de visualizar los datos
const ItemDetail = ({id, name, img, price, stock, category, description}) => {
    console.log({ id, name, img, price, stock, category, description });
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
        setQuantityAdded (quantity)
    }

    const item = { id, name, price }; // Creamos un objeto item para pasarlo a ItemCount 

    return (
        <article className="CardItemDetail"> 
            <h2 className="ItemHeader">{name}</h2>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Precio">Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} item={item} /> 
                    )
                }
            </footer>
        </article>
    );
}

export default ItemDetail;
