import { useState } from "react";
import { Link } from "react-router-dom";

import ItemDetail from "./ItemDetail";
const Intercambiabilidad = () => {

    const [inputType, setInputType ] = useState (false)

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
                <ItemDetail/>
            {
                inputType ?
                <>
                <Link to = '/cart'>
                    <button onClick={() => console.log('Pagó')}>
                        Efectuar el pago</button>
                </Link>
                <Link to = '/'>
                <button onClick={() => console.log('Ir a las cards')}>
                    Seguir comprando</button>
                </Link>
                </>
                :
                <button onClick={handleInter} >Agregar al carrito</button> 
            }
        </div>
    )
}

export default Intercambiabilidad