import Input from "./Input"
import React, { useEffect, useState } from 'react'
import ItemCount from "./ItemCount"

const ItemDetail = () => {
    const onAdd = (valor) => {
        console.log(`Compraste ${valor} remeras!`);
      }
    return (
    <>
        {/*<Input />*/} 
        <div>Estos son los articulos a la venta!</div>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </>
    )
}

export default ItemDetail