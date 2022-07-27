import ItemDetail from "../Body/ItemDetail"
import { useParams } from "react-router-dom"
import Intercambiabilidad from "./Intercambiabilidad"

const ItemDetailConteiner = () => {

  const { productId } = useParams()
  

  return (
    <div>
      {/*<ItemDetail />*/}
      <Intercambiabilidad/>
    </div>
        
  )
}

export default ItemDetailConteiner