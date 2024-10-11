import "./item.css"

const Item =({id, name, img, price, stock, description}) =>{
    return (
        <article className="CardItem"> 
            <h4>{name}</h4>
            <p>{description}</p>
            <picture>
                <img src={img} alt= {name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Precio">Precio: ${price}</p>
                <p className="Info">Stock disponible: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <button className="Option">Ver detalle</button>
            </footer>
        </article>
    )
}

export default Item