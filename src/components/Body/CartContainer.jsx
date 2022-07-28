import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {{
    const {cartList, vaciarAlCarrito} = useCartContext()
}
    return (
        <div>
            {cartList.map (producto => producto => <li>
                {producto.name}{producto.price}{producto.cantidad}
                </li>)}
            <button onClick={vaciarAlCarrito}>Vaciar Carrito</button>
        </div>
    )
}
export default CartContainer