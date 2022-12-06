import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( props ) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, quantity) => {
        let found = cartList.find(product => product.idItem === item.id);
        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imageItem: item.pictureUrl,
                    titleItem: item.title,
                    priceItem: item.price,
                    stockItem: item.stock,
                    quantityItem: quantity
                }
            ])

        }  else {
            found.quantityItem += quantity;
        }
    }

    const clear = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id)
        setCartList(result)
    }

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].quantityItem;
    }

    const calcSubTotal = () => {
        let totalPorItem = cartList.map(item => calcTotalPorItem(item.idItem));
        return totalPorItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQuantity = () => {
        let quantitys = cartList.map(item => item.quantityItem);
        return quantitys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem, calcTotalPorItem, calcSubTotal, calcTotal, calcItemsQuantity}}>
            { props.children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;