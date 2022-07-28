import ItemCount from "./ItemCount"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

const {agregarAlCarrito , cartList} = useCartContext //retorna useContext(CartContext)

    const ItemDetail = ({producto = {}}) => {
        const [isCount , setIsCount] = useState(true)
        const {agregarAlCarrito , CartList} = useCartContext ()
        //onAdd funcion
        const onAdd = (valor) => {
            console.log(valor)
            console.log(`Compraste ${valor} remeras!`);
            agregarAlCarrito({...producto , cantidad: valor})
            setIsCount(false)
        }
        //console.log(cartList) // undefined :(

        return (
        <>
            {/*<Input />*/} 
            <div>Estos son los articulos a la venta!</div>
            {
                isCount ?
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                :
                <Link to = '/cart'>
                    <button>Ir a cart</button>
                </Link>
                
            }
        </>
        )
}

export default ItemDetail