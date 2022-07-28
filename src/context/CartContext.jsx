import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext (CartContext)

const CartContextProvider = ({ children }) => {
    //estados y functions
    const [cartList, setCartList] = useState([]) //estado

    const agregarAlCarrito = (objProducto) => { //funcion global
            setCartList([...cartList,objProducto])
    }

    const vaciarAlCarrito = () => {
        setCartList([])
    }

    return(
        <CartContext.Provider value={{cartList , agregarAlCarrito, vaciarAlCarrito}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider