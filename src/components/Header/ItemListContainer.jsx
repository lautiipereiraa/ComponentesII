//const ItemListContainer = () => { //componente 1
    // console.log( props )

import { useContext } from "react"
import { CartContext } from "../Body/context/CartContext"

    
    //const busqueda = (props) => {
        //alert('Intenta mas tarde, no pudimos realizar tu busqueda')
      //}
    
  //return(
      //<div style={{display:"flex", justifyContent: "right"}}>
          //<button onClick = {props.buscar} style={{fontSize: 20, marginRight: 25}}>Buscar</button>
      //</div>
  //)
//}
//export default ItemListContainer

const busqueda = () => {
    alert('Intenta mas tarde, no pudimos realizar tu busqueda')
  }

//const obj = useContext(CartContext) //Contexto 1 conectado con CartContext
//console.log (obj)

function ItemListContainer ({buscar}) {
    return (
        <div style={{display:"flex", justifyContent: "right" }}>
            <button onClick= {busqueda} style={{fontSize: 20, marginRight: 25}} > { buscar } </button>
        </div>
    )
}

export default ItemListContainer