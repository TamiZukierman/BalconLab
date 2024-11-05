import { useContext } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const  { cart, clearCart, totalQuantity, total} = useContext (CartContext)
    console.log("Contenido del carrito:", cart);



    return (
        <div>
        {totalQuantity === 0 ? (
            <div>
                <h3>Tu carrito está vacío :(</h3>
                <Link to='/' className='Button'>Productos</Link>
            </div>
        ) : (
            <div>
                {cart.map(item => (
                    <CartItem key={item.id} {...item} /> // Renderiza cada item en el carrito
                ))}
                <h3>Total: ${total}</h3>
                <button onClick={clearCart} className='Button'>Limpiar carrito</button>
                <Link to='/checkout' className='checkout'>Finalizar compra</Link>
            </div>
        )}
    </div>

    )


}

export default Cart;