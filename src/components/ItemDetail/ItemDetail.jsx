import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

//Componente de presentacion encargado de visualizar los datos
const ItemDetail = ({id, name, img, price, stock, category, description}) => {
    console.log({ id, name, img, price, stock, category, description });
    return (
        <article className="CardItemDetail"> 
                <h2 className="ItemHeader">{name}</h2>
            <picture>
                <img src={img} alt= {name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">Categoría: {category}</p>
                <p className="Info">Descripción: {description}</p>
                <p className="Precio">Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
            <ItemCount initial = {1} stock =  {stock} onAdd = {(quantity) => console.log("Cantidad agregada",quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;
