import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, quantity) => {

        if (isInCart(item.id)) {
            setCartList(cartList.map(product => {
                return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setCartList([ ...cartList, { ...item, quantity }])
        }
    }

    const clear = () => setCartList([])
    
    const removeItem = (id) => setCartList(cartList.filter(product => product.id !== id));

    const isInCart = (id) => cartList.find(product => product.id === id) ? true : false;

    const calcSubTotal = () => {
        return cartList.reduce((previousValue, currentValue) => previousValue + currentValue.quantity * currentValue.price, 0)
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQuantity = () => {
        let quantitys = cartList.map(item => item.quantity);
        return quantitys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, calcSubTotal, calcTotal, calcItemsQuantity}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;