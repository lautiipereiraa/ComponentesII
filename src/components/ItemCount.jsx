//import { useState } from 'react'


//export const ItemCount = () => {

    //const [stock, setContador] = useState(0);

  //return (

    //<view style={{flex: 1, justifyContent: 'center' }}>
        
        //<button style={{backgroundColor : "",  fontSize : 20}} onClick={ () => setContador (stock + 1) }> Subir </button>

        //<p style={{textAlign:'center', fontSize: 40}}> Items = {stock} </p>

        //<button style={{backgroundColor : "", fontSize: 20}} onClick={ () => setContador (stock - 1) }>Bajar</button>

        //<p style={{fontSize: 50 , marginTop: 30}}> Stock = 10</p>

    //</view>


  //)
//}

//export default ItemCount

import React, {useState} from "react";

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial)

    const elimina = () => {
        setCount(count - 1);
    }

    const suma = () => {
        setCount(count + 1);
    }

    return (
        <div>

            <button disabled={count <= 1} onClick={elimina} style={{fontSize:10, margin : 30}}>-</button>
            <span>{count}</span>
        <button disabled={count >= stock} onClick={suma} style={{fontSize:10, margin : 30}}>+</button>
            
            <div>
                <button disabled={ stock <= 0 } onClick={() => onAdd(count)}>Agregar al carro</button>
            </div>
        </div>
    )
}

export default ItemCount