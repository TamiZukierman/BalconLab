import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { useForm } from 'react-hook-form';
import "./checkOut.css"
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Spinner from '../Spinner/Spinner';


export const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("")
    const [loading, setLoading] = useState(false); 
    

    const { cart, clearCart, total } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: cart,
            total: total
        };
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        setLoading(true); 

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id)
                clearCart()
            })
            .finally(() => {
                setLoading(false); // Finalizar el loading después de completar la compra
            });
    }

    if (loading) {
        return <Spinner />; // Muestra el spinner mientras se procesa la compra
    }
    if (pedidoId) {
        return (
            <div className='confirmation-message'>
                <h2>Muchas gracias por tu compra!</h2>
                <p className="order-id">Tu número de pedido es: <br/><br/>{pedidoId} </p>
            </div>
        )
    }

    return (
        <div className="checkout-container">
    <h1>Finalizar compra</h1>
    <form onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
        <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
        <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} />
        
        <button type="submit">Comprar</button>
    </form>
</div>
    );
};

export default CheckOut;

