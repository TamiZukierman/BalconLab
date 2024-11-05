import { useContext } from 'react';
import { CartContext } from "../../Context/CartContext";
import { Icon } from '@iconify/react'; 
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    // Función para manejar el clic en el ícono del carrito
    const handleCartClick = () => {
        navigate('/cart'); // Redirige a la ruta del carrito
    };

    return (
        <div onClick={handleCartClick} style={{ cursor: 'pointer' }}>
            <Icon icon="bi:cart2" style={{ fontSize: '20px', marginLeft: '5px' }} />
            {totalQuantity} 
        </div>
    );
}

export default CartWidget;
