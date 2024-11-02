import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartItem.css'

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="CartItem">
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {quantity}</p>
            <p>Subtotal: ${price * quantity}</p>
            <button className='delete' onClick={() => removeItem(id)} >Eliminar</button>
        </div>
    );
};

export default CartItem;
