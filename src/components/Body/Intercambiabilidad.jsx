import { useState } from "react";
import { Link } from "@mui/material";
import ItemDetail from "./ItemDetail";

const onAdd = (valor) => {
    console.log(`Compraste ${valor} remeras!`);
  }

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
                <Link>
                    <button onClick={() => console.log('Pagó')}>
                        Efectuar el pago</button>
                </Link>
                <Link>
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