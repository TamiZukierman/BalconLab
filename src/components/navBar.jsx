import { Icon } from '@iconify/react'; 
import { useState } from "react";
import Swal from 'sweetalert2';

export const Navbar = () =>{
const [carroItems, setCarroItems] = useState(0);
const handleCartClick = () => {
    setCarroItems(carroItems + 1); // Sumar 1 al número de productos en el carrito
    Swal.fire({
        title: 'Carrito actualizado',
        text: `Tu carrito tiene ahora ${carroItems + 1} producto(s)!`,
        icon: 'success',
        timer: 2000,
        confirmButtonText: 'OK'
        
});
};
    return (
    <nav>
        <ul>
            <li>Inicio</li>
            <li>
                <Icon icon="bi:cart2" style={{ fontSize: '20px', marginLeft: '5px' }} 
                onClick={handleCartClick}
                />
            </li>
        </ul>
    </nav>
    );
}