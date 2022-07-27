import { createContext, useState } from "react";
import ItemListContainer from "../../Header/ItemListContainer";

export const CartContext = createContext([]);

export default function App () {
    const [prods, setProds] = useState (productos);
    

function saludo (){
    console.log('hola soy context de CartContext')
}

return(
    <CartContext.Provider value={{prods}}>
        <ItemListContainer/>
    </CartContext.Provider>
)
}