import { useState } from "react";
import { Link } from "@mui/material";


const InputCount = () => {
    
    return(
        <>
        <Link>
            <button onClick={()=>console.log('Ir al inicio')}>
                Ir al inicio o efectuar el pago</button>
        </Link>
        <Link>
            <button onClick={()=>console.log('Ir al home')}>
                Seguir comprando</button>
        </Link>
        </>
    )
}

const ButtonCount = ({handleInter}) => {
    return <button className="btn btn-outline-success" onClick={handleInter}>Agregar al carrito</button>
}


const Intercambiabilidad = () => {
    const [inputType, setInputType ] = useState = "button"

    const handleInter = () => {
        setInputType('input')
    }

    return (
        <div>
            <h2>Item Description</h2>

            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />
                    :
                    <InputCount />
            }
        </div>
    )
}

export default Intercambiabilidad