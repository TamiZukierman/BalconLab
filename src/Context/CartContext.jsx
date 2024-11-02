import { createContext, useState } from 'react';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) => {
        const itemInCart = cart.find((prod) => prod.id === item.id);
        
        if (itemInCart) {
            setCart(cart.map((prod) => 
                prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
            ));
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };
    
    const removeItem = (itemId) => {
        setCart(cart.filter((prod) => prod.id !== itemId));
    };
    
    const clearCart = () => {
        setCart([]);
    };

    const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

    const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}> 
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
