import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { Icon } from '@iconify/react'; 

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext); // Consume el contexto

    return (
        <div>
            <Icon icon="bi:cart2" style={{ fontSize: '20px', marginLeft: '5px' }} />
            {totalQuantity} {/* Muestra la cantidad total */}
        </div>
    );
}

export default CartWidget;
